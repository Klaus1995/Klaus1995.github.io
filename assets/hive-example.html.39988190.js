import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.902c8dae.js";const e={},o=t(`<h1 id="hive连接器使用示例" tabindex="-1"><a class="header-anchor" href="#hive连接器使用示例" aria-hidden="true">#</a> Hive连接器使用示例</h1><p>下面展示如何使用用户参数配置读取测试hive表:</p><h2 id="测试hive表信息" tabindex="-1"><a class="header-anchor" href="#测试hive表信息" aria-hidden="true">#</a> 测试hive表信息</h2><ul><li>示例hive信息： <ul><li><p>hive库名: test_db</p></li><li><p>hive表名: test_table</p></li><li><p>metastore uri地址: <code>thrift://localhost:9083</code></p></li><li><p>分区: p_date</p></li><li><p>表结构:</p><table><thead><tr><th>字段名</th><th>字段类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td></td></tr><tr><td>state</td><td>string</td><td></td></tr><tr><td>county</td><td>string</td><td></td></tr><tr><td>p_date</td><td>string</td><td>分区字段</td></tr></tbody></table></li></ul></li></ul><h2 id="hive读连接器示例" tabindex="-1"><a class="header-anchor" href="#hive读连接器示例" aria-hidden="true">#</a> hive读连接器示例</h2><p>读取上述测试hive表的用户配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hive.source.HiveInputFormat&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;state&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;county&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift://localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;partition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p_date=20220101&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;reader_parallelism_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive写连接器示例" tabindex="-1"><a class="header-anchor" href="#hive写连接器示例" aria-hidden="true">#</a> hive写连接器示例</h2><p>写入上述测试hive表的用户配置:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hive.sink.HiveOutputFormat&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;state&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;county&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift://localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;partition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p_date=20220101&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;writer_parallelism_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function i(l,u){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","hive-example.html.vue"]]);export{d as default};
