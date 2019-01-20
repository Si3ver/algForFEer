统计一个页面有多少种标签

```javascript
new Set([...document.querySelectorAll('*')].map(v=>v.nodeName)).size
```
