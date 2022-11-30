import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.902c8dae.js";const o={},p=t(`<h1 id="mongodb连接器配置示例" tabindex="-1"><a class="header-anchor" href="#mongodb连接器配置示例" aria-hidden="true">#</a> MongoDB连接器配置示例</h1><p>假设在本地启动了一个mongoDB，连接地址为mongodb://localhost:1234。在其中创建了名为 <code>test_db</code> 的database和名为 <code>test_collection</code> 的文档集合。</p><h2 id="mongodb读连接器" tabindex="-1"><a class="header-anchor" href="#mongodb读连接器" aria-hidden="true">#</a> MongoDB读连接器</h2><p>假设想在文档包含 _id, string_field, int_field 三个字段，则可用如下配置读取。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.mongodb.source.MongoDBInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;split_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
      <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;collection_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_collection&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;objectid&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string_field&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int_field&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;reader_parallelism_num&quot;</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb写连接器" tabindex="-1"><a class="header-anchor" href="#mongodb写连接器" aria-hidden="true">#</a> MongoDB写连接器</h2><p>假设想在文档中写入 id, string_field, integer_field 三个字段，那么可以用如下配置进行写入。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.mongodb.sink.MongoDBOutputFormat&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;unique_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;client_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;mongo_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mongodb://localhost:1234/test_db&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;collection_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_collection&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
           <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
           <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
           <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string_field&quot;</span><span class="token punctuation">,</span>
           <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
           <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer_field&quot;</span><span class="token punctuation">,</span>
           <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[p];function l(c,i){return s(),a("div",null,e)}const d=n(o,[["render",l],["__file","mongodb-example.html.vue"]]);export{d as default};
