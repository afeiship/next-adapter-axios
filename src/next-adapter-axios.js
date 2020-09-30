(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractRequest = nx.AbstractRequest || require('@feizheng/next-abstract-request');
  var axios = global.axios || require('axios');
  var isGET = function (inMethod) {
    return inMethod.toLowerCase() === 'get';
  };

  var NxAdapterAxios = nx.declare('nx.AdapterAxios', {
    extends: NxAbstractRequest,
    methods: {
      request: function (inMethod, inUrl, inData, inOptions) {
        var data = isGET(inMethod) ? { params: inData } : { data: inData };
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
