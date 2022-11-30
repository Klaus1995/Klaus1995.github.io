import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as t,b as a,d as n,w as l,e as s,r as o}from"./app.902c8dae.js";const i={},u=s(`<h1 id="kafka连接器" tabindex="-1"><a class="header-anchor" href="#kafka连接器" aria-hidden="true">#</a> Kafka连接器</h1><p>Kafka连接器支持如下功能点:</p><ul><li>批式场景下支持 <code>At Least Once</code> 的写入</li><li>流式场景下支持 <code>Exactly Once</code> 的读取</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><p>Kafka连接器内部使用 1.0.1 版本的<code>org.apache.kafka:kafka-clients</code>进行数据写入，因此在使用kafka写连接器时时需要注意目标kafka集群能使用此版本<code>kafka-clients</code>连接。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;bitsail-connector-kafka&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka读连接器" tabindex="-1"><a class="header-anchor" href="#kafka读连接器" aria-hidden="true">#</a> Kafka读连接器</h2><h3 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置" aria-hidden="true">#</a> 参数配置</h3><table><thead><tr><th>参数名</th><th>参数是否必需</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td>class</td><td>是</td><td></td><td>Kafka读连接器类名，只能为<code>com.bytedance.bitsail.connector.legacy.kafka.source.KafkaSourceFunctionDAGBuilder</code></td></tr><tr><td>child_connector_type</td><td>是</td><td></td><td>指定连接的消息队列种类，只能为<code>kafka</code></td></tr><tr><td>reader_parallelism_num</td><td>否</td><td></td><td>读并发数</td></tr></tbody></table><h4 id="kafkaconsumer属性设置" tabindex="-1"><a class="header-anchor" href="#kafkaconsumer属性设置" aria-hidden="true">#</a> KafkaConsumer属性设置</h4><p>Kafka连接器底层使用FlinkKafkaConsumer进行读取。初始化FlinkKafkaConsumer的属性或者kafka信息均通过选项<code>job.reader.connector</code>传入，具体形式如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;connector&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prop_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prop_value&quot;</span>   <span class="token comment">// &quot;prop_key&quot;和&quot;prop_value&quot;代指属性key和属性value</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>job.reader.connector</code>支持 &lt;string,string&gt; 形式的KV配置，其中:</p><ul><li><code>prop_key</code>: KafkaConsumer属性key</li><li><code>prop_value</code>: KafkaConsumer属性value</li></ul><p>下面列举了一些常见的属性key:</p><p><b>1. kafka集群属性</b></p>`,16),k=t("thead",null,[t("tr",null,[t("th",null,"属性key"),t("th",null,"属性是否必需"),t("th",null,"属性默认值"),t("th",null,"属性可选值"),t("th",null,"属性说明")])],-1),h=t("tr",null,[t("td",null,"connector.bootstrap.servers"),t("td",null,"是"),t("td"),t("td"),t("td",null,"读取的kafka集群地址")],-1),m=t("tr",null,[t("td",null,"connector.topic"),t("td",null,"是"),t("td"),t("td"),t("td",null,"读取的topic")],-1),f={href:"http://connector.group.id",target:"_blank",rel:"noopener noreferrer"},b=t("td",null,"是",-1),v=t("td",null,null,-1),_=t("td",null,null,-1),q=t("td",null,"kafka消费组",-1),g=s('<p><b>2. kafka起始消费属性</b></p><table><thead><tr><th>属性key</th><th>属性是否必需</th><th>属性默认值</th><th>属性可选值</th><th>属性说明</th></tr></thead><tbody><tr><td>connector.startup-mode</td><td>否</td><td>group-offsets</td><td>1. <code>ealiest-offset</code>: 从partition的最早offset开始消费<br>2. <code>latest-offset</code>: 从partition的最新offset开始消费<br>3. <code>group-offsets</code>: 设置从当前consumer group的offset开始消费<br>4. <code>specific-offsets</code>: 指定各个partition的起始消费offset，配合connector.specific-offsets使用<br>5. <code>specific-timestamp</code>: 指定消费某个时间点后的数据，配合connector.specific-timestamp使用</td><td>决定kafka从何处开始消费</td></tr><tr><td>connector.specific-offsets</td><td>否</td><td></td><td></td><td>配合specific-offsets使用，格式为标准json字符串，例如:<br><code>[{&quot;partition&quot;:1,&quot;offset&quot;:100},{&quot;partition&quot;:2,&quot;offset&quot;:200}]</code></td></tr><tr><td>connector.specific-timestamp</td><td>否</td><td></td><td></td><td>配合specific-timestamp使用，指定KafkaConsumer的消费起始时间戳，单位ms</td></tr></tbody></table><p><b>3. 其他FlinkKafkaConsumer参数</b></p><p>FlinkKafkaConsumer支持许多参数，详情可参考<a href="https://kafka.apache.org/21/javadoc/?org/apache/kafka/clients/consumer/ConsumerConfig.html">ConsumerConfig(2.1.0) API]</a>。</p>',4),y={href:"http://connector.XXX",target:"_blank",rel:"noopener noreferrer"},x=s(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;connector&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;connector.max.partition.fetch.bytes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1024&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="debug参数" tabindex="-1"><a class="header-anchor" href="#debug参数" aria-hidden="true">#</a> debug参数</h4><p>Kafka读连接器用于流式场景，正常情况下会一直消费。若用户想通过只消费有限数量的数据进行debug，则可通过以下参数进行配置。注意这些参数需要添加<code>job.reader</code>前缀。</p><table><thead><tr><th>参数名</th><th>参数是否必需</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td>enable_count_mode</td><td>否</td><td>false</td><td>是否在发送一段数据后结束当前任务，一般用于测试</td></tr><tr><td>count_mode_record_threshold</td><td>否</td><td>10000</td><td>若enable_count_mode=true，则在kafka消费count_mode_record_threshold条数据后结束当前任务</td></tr><tr><td>count_mode_run_time_threshold</td><td>否</td><td>600</td><td>若enable_count_mode=true，则在任务运行count_mode_record_threshold秒后结束当前任务</td></tr></tbody></table><h3 id="支持的消息解析模式" tabindex="-1"><a class="header-anchor" href="#支持的消息解析模式" aria-hidden="true">#</a> 支持的消息解析模式</h3><p>从KafkaConsumer可以拉取到消息<code>ConsumerRecord</code>。 <em><strong>BitSail</strong></em> 支持两种对<code>ConsumerRecord</code>的处理方式。 用户可通过参数<code>job.reader.format_type</code>决定使用哪种方式:</p><ul><li><code>job.reader.format_type=&quot;json&quot;</code>: 按照json格式解析 <ul><li>在此模式下，<em><strong>BitSail</strong></em> 按照用户设置的参数 <code>job.reader.columns</code> ，对ConsumerRecord中value代表的json格式字符串进行解析。</li><li>因此此模式下必需<code>job.reader.columns</code>参数</li></ul></li><li><code>job.reader.format_type=&quot;streaming_file&quot;</code>: 不解析 <ul><li>在此模式下，会直接将ConsumerRecord中的信息传出，具体结构如下:</li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    <span class="token punctuation">[</span>
   <span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;binary&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 消息key</span>
   <span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;binary&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// 消息value</span>
   <span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;partition&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 消息来源partition</span>
   <span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;offset&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;long&quot;</span><span class="token punctuation">}</span>     <span class="token comment">// 消息在partition中的offset</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka写连接器" tabindex="-1"><a class="header-anchor" href="#kafka写连接器" aria-hidden="true">#</a> kafka写连接器</h2><h3 id="参数配置-1" tabindex="-1"><a class="header-anchor" href="#参数配置-1" aria-hidden="true">#</a> 参数配置</h3><p>注意这些参数需要添加<code>job.writer</code>前缀。</p><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th>参数名</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td>class</td><td></td><td>kafka写连接器类名，只能为<code>com.bytedance.bitsail.connector.legacy.kafka.sink.KafkaOutputFormat</code></td></tr><tr><td>kafka_servers</td><td></td><td>kafka的bootstrap server地址，多个bootstrap server地址由逗号 <code>&#39;,&#39;</code> 分隔</td></tr><tr><td>topic_name</td><td></td><td>要写入的topic</td></tr><tr><td>columns</td><td></td><td>数据字段名称及字段类型</td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th>参数名</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td>writer_parallelism_num</td><td>-</td><td>写并发数</td></tr><tr><td>partition_field</td><td>-</td><td>partition_field包含“job.writer.columns”中的一个或几个field，以逗号分隔（例如：&quot;id,timestamp&quot;）。<br>若partition_field不为空，在发送数据到kafka topic时，会根据record中的这几个field的值决定写入哪个topic</td></tr><tr><td>log_failures_only</td><td>false</td><td>在KafkaProducer执行异步send操作失败时:<br>1. 若log_failures_only=true，则只通过log.error发送失败信息<br>2. 若log_failures_only=false，则抛出异常</td></tr><tr><td>retries</td><td>10</td><td>KafkaProducer的失败重试次数</td></tr><tr><td>retry_backoff_ms</td><td>1000</td><td>KafkaProducer的失败重试间隔，单位ms</td></tr><tr><td>linger_ms</td><td>5000</td><td>KafkaProducer创建单个batch的最大等待时间，单位ms</td></tr></tbody></table><h4 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h4><p>在初始化KafkaProducer时，用户可通过参数 <code>job.common.optional</code> 传入指定的初始化参数，示例如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;common&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;optional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;batch.size&quot;</span><span class="token operator">:</span> <span class="token number">16384</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buffer.memory&quot;</span><span class="token operator">:</span> <span class="token number">33554432</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,20);function j(K,C){const e=o("ExternalLinkIcon"),r=o("RouterLink");return p(),c("div",null,[u,t("table",null,[k,t("tbody",null,[h,m,t("tr",null,[t("td",null,[t("a",f,[a("connector.group.id"),n(e)])]),b,v,_,q])])]),g,t("p",null,[a("若用户需要设置这些参数，可通过此 "),t("a",y,[a("connector.XXX"),n(e)]),a(" 来进行配置。 例如，若要设置MAX_PARTITION_FETCH_BYTES_CONFIG为1024，则添加参数：")]),x,t("p",null,[a("配置示例文档 "),n(r,{to:"/zh/connectors/kafka/kafka-example_zh.html"},{default:l(()=>[a("kafka连接器示例")]),_:1})])])}const B=d(i,[["render",j],["__file","kafka.html.vue"]]);export{B as default};
