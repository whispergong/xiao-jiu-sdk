1. 将XiaoJiuSDK.js注入就行，不需要type=module
2. 注入script麻烦再链接上加上query`v=${new Date().getTime()}`，这个文件不需要缓存
3. script加上id，`xiao-jiu-sdk`