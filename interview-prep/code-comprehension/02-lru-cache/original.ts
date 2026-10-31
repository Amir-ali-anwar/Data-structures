// ORIGINAL (buggy) version. Bugs found:
// 1. pop() removes the NEWEST key. Evict the oldest: this.cache.keys().next().value
// 2. size >= capacity evicts too early. Use size > capacity.
// 3. get() must move the key to the end (delete, then set) so it counts as recently used.
// 4. put() on an existing key needs the same delete-then-set.
// Feature: TTL with expiresAt, checked lazily in get().
// Optimisation: min-heap by expiresAt for cleanup; Redis uses lazy expiry + random sampling.
class LRUCache {
  private cache = new Map<number, number>();
  constructor(private capacity: number) {}

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    return this.cache.get(key)!;
  }

  put(key: number, value: number): void {
    this.cache.set(key, value);
    if (this.cache.size >= this.capacity) {
      const newestKey = Array.from(this.cache.keys()).pop()!;
      this.cache.delete(newestKey);
    }
  }
}
