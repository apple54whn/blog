(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{148:function(t,e,a){"use strict";a.r(e);var v=a(0),_=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),a("h2",{attrs:{id:"delete-与-truncate-删除表记录区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-与-truncate-删除表记录区别","aria-hidden":"true"}},[t._v("#")]),t._v(" DELETE 与 TRUNCATE 删除表记录区别")]),t._v(" "),a("ul",[a("li",[t._v("DELETE每次从表中删除一行，并将该操作作为事务记录在"),a("strong",[t._v("日志")]),t._v("中以便回滚，"),a("strong",[t._v("不清空 AUTO_INCREMENT 记录")]),t._v("数")]),t._v(" "),a("li",[t._v("TRUNCATE"),a("strong",[t._v("直接删除")]),t._v("表并"),a("strong",[t._v("重新创建")]),t._v("新表，不能回滚， "),a("strong",[t._v("AUTO_INCREMENT置为0")]),t._v("，"),a("strong",[t._v("效率比DELETE高")])])]),t._v(" "),a("h2",{attrs:{id:"存储过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 存储过程")]),t._v(" "),a("p",[t._v("一组为了完成特定功能的 SQL 语句集，，经编译后存储在数据库中，可以通过存储过程名称调用")]),t._v(" "),a("h2",{attrs:{id:"索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),a("p",[t._v("对数据库中一或多个列值的排序，帮助数据库高效获取数据的数据结构。有：普通索引、唯一索引、主键索引、全文索引")]),t._v(" "),a("ul",[a("li",[t._v("优点：\n"),a("ul",[a("li",[a("strong",[t._v("加快检索速度")])]),t._v(" "),a("li",[t._v("唯一索引确保每行数据的唯一性")]),t._v(" "),a("li",[t._v("在使用索引的过程可以优化隐藏器，提高系统性能")])])]),t._v(" "),a("li",[t._v("缺点："),a("strong",[t._v("插入、删除、修改")]),t._v("、维护速度下降，且"),a("strong",[t._v("占")]),t._v("用物理和数据"),a("strong",[t._v("空间")])])]),t._v(" "),a("h2",{attrs:{id:"事务四大特性（acid）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务四大特性（acid）","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务四大特性（ACID）")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("原子性")]),t._v("（Atomicity）：事务中所有操作是不可再分割的"),a("strong",[t._v("原子单位")]),t._v("。事务中所有操作要么全部执行成功，要么全部执行失败。")]),t._v(" "),a("li",[a("strong",[t._v("一致性")]),t._v("（Consistency）：在事务开始之前和事务结束以后，数据库"),a("strong",[t._v("状态保持一致")]),t._v("。如转账业务，无论事务执行成功与否，参与转账的两个账号余额之和应该是不变的。")]),t._v(" "),a("li",[a("strong",[t._v("隔离性")]),t._v("（Isolation）：隔离性是指在"),a("strong",[t._v("并发")]),t._v("操作中，"),a("strong",[t._v("不同事务之间应该隔离")]),t._v("开来，使每个并发中的事务不会相互干扰。")]),t._v(" "),a("li",[a("strong",[t._v("持久性")]),t._v("（Durability）：一旦事务"),a("strong",[t._v("提交")]),t._v("成功，它"),a("strong",[t._v("对数据的改变必须是永久")]),t._v("的，即使出现系统故障。")])]),t._v(" "),a("h2",{attrs:{id:"并发事务问题与隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发事务问题与隔离级别","aria-hidden":"true"}},[t._v("#")]),t._v(" 并发事务问题与隔离级别")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("脏读：一个事务读取到另一个事务"),a("strong",[t._v("未提交")]),t._v("的数据")]),t._v(" "),a("li",[t._v("不可重复读：一个事务中"),a("strong",[t._v("两次读取的数据内容")]),t._v("不一致。这是事务update 时引发的问题。")]),t._v(" "),a("li",[t._v("幻读：一个事务中"),a("strong",[t._v("两次读取的数据的数量不一致")]),t._v("，这是 insert 或 delete 时引发的问题。")])]),t._v(" "),a("p",[a("strong",[t._v("四大隔离级别")]),t._v("（“×”表示会出现这种问题；“ ”表示不会出现这种问题）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("隔离级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("数据库默认隔离级别")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读未提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("read uncommitted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("读已提交")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("read committed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Oracle 和 SQL Server")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可重复读")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("repeatable read")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("MySQL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("串行化")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("serializable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("blockquote",[a("p",[t._v("上面的级别最低，下面的级别最高。隔离级别越高，性能越差，安全性越高。")])]),t._v(" "),a("h2",{attrs:{id:"如何进行事务管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何进行事务管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何进行事务管理")]),t._v(" "),a("p",[a("strong",[t._v("Connection")]),t._v("的三个方法与事务相关：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("setAutoCommit")]),t._v("(boolean)：设置是否为自动提交事务，如果true（默认值就是true）表示自动提交，也就是每条执行的SQL语句都是一个单独的事务，如果设置"),a("strong",[t._v("false")]),t._v("，那么就相当于开启了事务了；")]),t._v(" "),a("li",[a("strong",[t._v("commit")]),t._v("()：提交事务")]),t._v(" "),a("li",[a("strong",[t._v("rollback")]),t._v("()：回滚事务")])]),t._v(" "),a("p",[t._v("还可以设置Savepoint，允许通过代码设置保存点并让事务回滚到指定的保存点")]),t._v(" "),a("h2",{attrs:{id:"sql-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-优化","aria-hidden":"true"}},[t._v("#")]),t._v(" SQL 优化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("查询结果"),a("strong",[t._v("不要用")]),a("em",[t._v("来查询所有字段，要明确")]),a("em",[t._v("指明结果字段")]),t._v("*")])]),t._v(" "),a("li",[a("p",[t._v("对查询进行优化，避免全表扫描，首先应考虑在 "),a("strong",[t._v("where 及 order by 涉及的列上建立索引")]),t._v("，建立"),a("strong",[t._v("索引时字段不能有 null 值")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("索引不是越多越好")]),t._v("。在提高select效率同时，降低了"),a("strong",[t._v("insert和update")]),t._v("效率（可能会重建索引）。一个表索引数最好不要超过6个")])]),t._v(" "),a("li",[a("p",[t._v("根据查询条件，建立索引，如果"),a("strong",[t._v("查询条件不止一个")]),t._v("时，使用"),a("strong",[t._v("组合索引")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("避免在 where 子句中对字段进行 null 值判断、使用!=或<>操作符、使用 or 来连接条件、in 和 not in 也要慎用")]),t._v("，否则将导致引擎放弃使用索引而进行全表扫描")]),t._v(" "),a("p",[t._v("在查询"),a("strong",[t._v("条件表达式的左侧尽量不要使用函数")]),t._v("，否则索引失效")]),t._v(" "),a("p",[t._v("如果有 "),a("strong",[t._v("like")]),t._v(" 话，尽量避免%xxx%两侧都有%的条件，"),a("strong",[t._v("单侧%可以使用索引")]),t._v("，多侧不可以")])])]),t._v(" "),a("h2",{attrs:{id:"mysql-数据库优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据库优化","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL 数据库优化")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("EXPLAIN")]),t._v(" 你的 SELECT 查询")]),t._v(" "),a("li",[t._v("当只要"),a("strong",[t._v("一行数据")]),t._v("时使用 "),a("strong",[t._v("LIMIT 1")])]),t._v(" "),a("li",[t._v("使用 "),a("strong",[t._v("ENUM")]),t._v(" 而"),a("strong",[t._v("不是 VARCHAR")])]),t._v(" "),a("li",[a("strong",[t._v("固定长度的表")]),t._v("会更"),a("strong",[t._v("快")])])]),t._v(" "),a("h2",{attrs:{id:"常用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具")]),t._v(" "),a("h3",{attrs:{id:"慢查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 慢查询日志")]),t._v(" "),a("h3",{attrs:{id:"explain-执行计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain-执行计划","aria-hidden":"true"}},[t._v("#")]),t._v(" Explain 执行计划")]),t._v(" "),a("h3",{attrs:{id:"profiling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profiling","aria-hidden":"true"}},[t._v("#")]),t._v(" Profiling")]),t._v(" "),a("h3",{attrs:{id:"数据库连接进程表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库连接进程表","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库连接进程表")]),t._v(" "),a("h2",{attrs:{id:"引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 引擎")]),t._v(" "),a("h3",{attrs:{id:"innodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb","aria-hidden":"true"}},[t._v("#")]),t._v(" InnoDB")]),t._v(" "),a("h3",{attrs:{id:"myisam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam","aria-hidden":"true"}},[t._v("#")]),t._v(" MyIsam")]),t._v(" "),a("h3",{attrs:{id:"blackhole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blackhole","aria-hidden":"true"}},[t._v("#")]),t._v(" Blackhole")]),t._v(" "),a("h2",{attrs:{id:"主从复制master-salve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制master-salve","aria-hidden":"true"}},[t._v("#")]),t._v(" 主从复制Master/Salve")]),t._v(" "),a("h2",{attrs:{id:"读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离","aria-hidden":"true"}},[t._v("#")]),t._v(" 读写分离")]),t._v(" "),a("h2",{attrs:{id:"mybatis-中一级和二级缓存的区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-中一级和二级缓存的区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" MyBatis 中一级和二级缓存的区别？")]),t._v(" "),a("p",[t._v("一级缓存是 SqlSession 级别的缓存。在操作数据库时需要构造 sqlSession 对象，在对象中有一个(内存区域)数据结构（HashMap）用于存储缓存数据。不同的 sqlSession之间的缓存数据区域（HashMap）是互相不影响的。\n一级缓存的作用域是同一个 SqlSession，在同一个 sqlSession中两次执行相同的 sql语句，第一次执行完毕会将数据库中查询的数据写到缓存（内存），第二次会从缓存中获取数据将不再从数据库查询，从而提高查询效率。当一个 sqlSession结束后该 sqlSession中的一级缓存也就不存在了。Mybatis默认开启一级缓存。\n二级缓存是 mapper级别的缓存，多个 SqlSession去操作同一个 Mapper的sql语句，多个 SqlSession去操作数据库得到数据会存在二级缓存区域，多个 SqlSession可以共用二级缓存，二级缓存是跨 SqlSession的。\n二级缓存是多个 SqlSession 共享的，其作用域是 mapper 的同一个 namespace，不同的sqlSession两次执行相同 namespace下的 sql语句且向 sql中传递参数也相同即最终执行相同的 sql 语句，第一次执行完毕会将数据库中查询的数据写到缓存（内存），第二次会从缓存中获取数据将不再从数据库查询，从而提高查询效率。Mybatis 默认没有开启二级缓存需要在setting全局参数中配置开启二级缓存。")]),t._v(" "),a("h2",{attrs:{id:"什么是redis？用处？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是redis？用处？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是Redis？用处？")]),t._v(" "),a("p",[t._v("Redis是一个"),a("strong",[t._v("开源的高性能key-value数据库")]),t._v("。应用场景如下：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("缓存")]),t._v("（数据查询、短连接、新闻内容、商品内容等等）")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("队列")]),t._v("（秒杀、抢购、12306等等）")])]),t._v(" "),a("li",[a("p",[t._v("发布/订阅")])]),t._v(" "),a("li",[a("p",[t._v("排行榜/计数器")])])]),t._v(" "),a("h2",{attrs:{id:"redis相比-memcached-有哪些优势？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis相比-memcached-有哪些优势？","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis相比 memcached 有哪些优势？")]),t._v(" "),a("ul",[a("li",[t._v("Redis"),a("strong",[t._v("速度")]),t._v("比memcached快很多")]),t._v(" "),a("li",[t._v("Redis支持丰富的"),a("strong",[t._v("数据类型")]),t._v("，memcached所有值都是简单的字符串类型")]),t._v(" "),a("li",[t._v("Redis可以"),a("strong",[t._v("持久化")]),t._v("数据")])])])},[],!1,null,null,null);e.default=_.exports}}]);