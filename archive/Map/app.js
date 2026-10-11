const map= new Map([['a',1],['b',3]])

map.set('c','1')
map.has('c')
map.delete('c')
map.clear()
for (const [key,value] of map) {
    console.log(`${key}:${value}`);
}