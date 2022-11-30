import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,e as t}from"./app.902c8dae.js";const e={},o=t(`<h1 id="elasticsearch连接器使用示例" tabindex="-1"><a class="header-anchor" href="#elasticsearch连接器使用示例" aria-hidden="true">#</a> Elasticsearch连接器使用示例</h1><p>如下展示了如何使用用户参数配置写入指定的elasticsearch索引。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.elasticsearch.sink.ElasticsearchSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;es_id_fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;es_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es_index_test&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;es_hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:1234&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;json_serializer_features&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QuoteFieldNames,UseSingleQuotes&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bulk_backoff_max_retry_count&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(i,l){return n(),a("div",null,p)}const d=s(e,[["render",c],["__file","elasticsearch-example.html.vue"]]);export{d as default};
