<h1>retryer.js</h1>
<p><code>retryer</code> is a tiny library that enables you to retry requests.</p>

<p><img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="intro"/></p>

<pre><code class="highlight-javascript">// STEP 1: create function that returns promise
function sendRequest() {
   return request('http://site.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
  .then(data =&gt; console.log('Connected 🎉'))
  .catch(error =&gt; console.log('error'))
</code></pre>
