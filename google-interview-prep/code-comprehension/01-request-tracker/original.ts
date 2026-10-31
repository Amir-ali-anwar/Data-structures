// ORIGINAL (buggy) version. Bugs found:
// 1. topK sorts ascending (a[1] - b[1]); should be b[1] - a[1].
// 2. evictOld uses <, countLastFiveMinutes uses >: boundary mismatch. Use >= in count.
// 3. logs.shift() is O(n): use a circular buffer or head pointer. Count = tail - head.
// Still to do: feature planning (topKInLastMinute) and heap-based top-k.
type RequestLog = { endpoint: string; timestamp: number };

class RequestTracker {
  private logs: RequestLog[] = [];
  private counts: Map<string, number> = new Map();
  private readonly windowMs = 5 * 60 * 1000;

  record(endpoint: string, timestamp: number): void {
    this.logs.push({ endpoint, timestamp });
    this.counts.set(endpoint, (this.counts.get(endpoint) || 0) + 1);
  }

  private evictOld(now: number): void {
    while (this.logs.length > 0 && this.logs[0].timestamp < now - this.windowMs) {
      const old = this.logs.shift()!;
      const c = this.counts.get(old.endpoint)!;
      if (c === 1) this.counts.delete(old.endpoint);
      else this.counts.set(old.endpoint, c - 1);
    }
  }

  countLastFiveMinutes(now: number): number {
    return this.logs.filter(l => l.timestamp > now - this.windowMs).length;
  }

  topK(k: number, now: number): string[] {
    this.evictOld(now);
    const entries = Array.from(this.counts.entries());
    entries.sort((a, b) => a[1] - b[1]);
    return entries.slice(0, k).map(e => e[0]);
  }
}
