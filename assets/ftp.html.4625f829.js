import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,a as n,b as t,d as s,w as r,e,r as o}from"./app.902c8dae.js";const c={},h=e(`<h1 id="ftp-sftp连接器" tabindex="-1"><a class="header-anchor" href="#ftp-sftp连接器" aria-hidden="true">#</a> FTP/SFTP连接器</h1><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><p>连接器可用于批式场景下的FTP/SFTP服务器上文件读取。其功能点主要包括:</p><ul><li>支持同时读取多个目录下的文件</li><li>支持读取多种格式的文件</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;bitsail-connector-ftp&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2><ul><li>支持的基础数据类型如下: <ul><li>整数类型: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>浮点类型: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>时间类型: <ul><li>timestamp</li><li>date</li></ul></li><li>字符类型: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>布尔类型: <ul><li>boolean</li></ul></li><li>二进制类型: <ul><li>binary</li></ul></li></ul></li><li>支持的复杂数据类型包括: <ul><li>map</li><li>array</li></ul></li></ul><h2 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h2><p>以下参数使用在 <code>job.reader</code>配置中</p>`,10),f=e('<h3 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数是否必需</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">读连接器类名，只能为 <code>com.bytedance.bitsail.connector.legacy.ftp.source.FtpInputFormat</code></td></tr><tr><td style="text-align:left;">path_list</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">指定读入文件的路径。可指定多个路径，使用 <code>&#39;,&#39;</code>分隔</td></tr><tr><td style="text-align:left;">content_type</td><td style="text-align:left;">是</td><td style="text-align:left;">JSON/CSV</td><td style="text-align:left;">指定读入文件的格式，详情参考<a href="#jump_format">支持的文件格式</a></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">数据字段名称及类型</td></tr><tr><td style="text-align:left;">port</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">服务器端口，FTP通常为21，SFTP 为22</td></tr><tr><td style="text-align:left;">host</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">服务器host</td></tr><tr><td style="text-align:left;">user</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">用户名</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">密码</td></tr><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">是</td><td style="text-align:left;">FTP/SFTP</td><td style="text-align:left;">文件传输协议</td></tr><tr><td style="text-align:left;">success_file_path</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">SUCCESS标签文件路径(检查默认开启，文件存在才会执行任务)</td></tr></tbody></table><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数是否必需</th><th>默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">connect_pattern</td><td style="text-align:left;">否</td><td>PASV(FTP)/NULL(SFTP)</td><td style="text-align:left;">PASV/PORT/NULL</td><td style="text-align:left;">连接模式，FTP协议下可为PASV或PORT; SFTP协议下为NULL</td></tr><tr><td style="text-align:left;">time_out</td><td style="text-align:left;">否</td><td>5000ms</td><td style="text-align:left;"></td><td style="text-align:left;">连接超时</td></tr><tr><td style="text-align:left;">enable_success_file_check</td><td style="text-align:left;">否</td><td>True</td><td style="text-align:left;"></td><td style="text-align:left;">默认开启，必须有SUCCESS标签文件存在才会执行任务</td></tr><tr><td style="text-align:left;">max_retry_time</td><td style="text-align:left;">否</td><td>60</td><td style="text-align:left;"></td><td style="text-align:left;">检查SUCCESS标签文件次数</td></tr><tr><td style="text-align:left;">retry_interval_ms</td><td style="text-align:left;">否</td><td>60s</td><td style="text-align:left;"></td><td style="text-align:left;">检查SUCCESS标签文件间隔</td></tr></tbody></table><h2 id="支持的文件格式" tabindex="-1"><a class="header-anchor" href="#支持的文件格式" aria-hidden="true">#</a> <span id="jump_format">支持的文件格式</span></h2><p>支持对以下格式的文件进行解读(配置参数<code>content_type</code>):</p><ul><li><a href="#jump_json">JSON</a></li><li><a href="#jump_csv">CSV</a></li></ul><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <span id="jump_json">JSON</span></h3><p>支持对json格式的文本文件进行解析，要求每行均为标准的json字符串。 支持以下参数对json解析方式进行调整:</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td><code>job.common.case_insensitive</code></td><td>true</td><td>是否对json字段中的key大小写敏感</td></tr><tr><td><code>job.common.json_serializer_features</code></td><td></td><td>指定 <code>FastJsonUtil</code>进行解析时的模式，格式为 <code>&#39;,&#39;</code>分隔的字符串，例如 <code>&quot;QuoteFieldNames,UseSingleQuotes&quot;</code></td></tr><tr><td><code>job.common.convert_error_column_as_null</code></td><td>false</td><td>是否将解析出错的字段置为null</td></tr></tbody></table><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> <span id="jump_csv">CSV</span></h3><p>支持对csv格式的文本文件进行解析，要求每行均为标准的csv字符串。 支持以下参数对csv解析方式进行调整:</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td><code>job.common.csv_delimiter</code></td><td><code>&#39;,&#39;</code></td><td>csv分隔符</td></tr><tr><td><code>job.common.csv_escape</code></td><td></td><td>escape字符</td></tr><tr><td><code>job.common.csv_quote</code></td><td></td><td>quote字符</td></tr><tr><td><code>job.common.csv_with_null_string</code></td><td></td><td>指定null字段的转化值，默认不转化</td></tr></tbody></table>',13);function x(y,g){const l=o("RouterLink");return a(),i("div",null,[h,n("p",null,[t("配置示例文档 "),s(l,{to:"/zh/connectors/ftp/ftp-example.html"},{default:r(()=>[t("FTP/SFTP连接器示例")]),_:1})]),f])}const m=d(c,[["render",x],["__file","ftp.html.vue"]]);export{m as default};
