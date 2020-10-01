(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractRequest = nx.AbstractRequest || require('@feizheng/next-abstract-request');
  var axios = global.axios || require('axios');

  var NxAdapterAxios = nx.declare('nx.AdapterAxios', {
    extends: NxAbstractRequest,
    methods: {
      request: function (inMethod, inUrl, inData, inOptions) {
        var isGET = inMethod.toLowerCase() === 'get';
        var data = isGET ? { params: inData } : { data: inData };
        return axios.request(
          nx.mix(
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
