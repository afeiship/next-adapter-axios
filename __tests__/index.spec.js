(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxAdapterAxios = require('../src/next-adapter-axios');
  var MyHttpAdapter = nx.declare({
    extends: NxAdapterAxios,
    init: function () {
      nx.mix(axios.defaults, {
        baseURL: 'https://api.github.com'
      });
    }
  });

  var http = MyHttpAdapter.getInstance();

  describe('NxAdapterAxios.methods', function () {
    test('init', function (done) {
      http.get('/users/afeiship').then((res) => {
        console.log(res);
        done();
      });
    });
  });
})();
