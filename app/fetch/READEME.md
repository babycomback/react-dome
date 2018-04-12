fetch访问接口数据是异步的。
<!-- 遇到的问题是： -->
banner使用react-swiper并动态的获取数据展示banner时，banner平铺到了网页中，原因是因为接口是异步的所以刚开始拿不到数据react-swiper就把样式做好了  之后数据发生变化，就导致了数据平铺在了网页中.
<!-- 解决方法： -->
对数据进行判断 例如：bannerlist != null ? bannerlist : [];
bannerlist.length > 0时在进行map循环。