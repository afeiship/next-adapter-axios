/*!
 * name: @feizheng/next-adapter-axios
 * description: Adapter based on axios for next.
 * homepage: https://github.com/afeiship/next-adapter-axios
 * version: 1.0.0
 * date: 2020-09-30T03:15:24.560Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractRequest = nx.AbstractRequest || require('@feizheng/next-abstract-request');
  var axios = global.axios || require('axios');

  var NxAdapterAxios = nx.declare('nx.AdapterAxios', {
    extends: NxAbstractRequest,
    methods: {
      request: function (inMethod, inUrl, inData, inOptions) {
        var data = inMethod.toLowerCase() === 'get' ? { params: inData } : { data: inData };
        return axios.request(
          mx.mix(
            {
              method: inMethod,
              url: inUrl
            },
            data,
            inOptions
          )
        );
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAdapterAxios;
  }
})();
