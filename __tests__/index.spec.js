(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxAdapterAxios = require('../src/next-adapter-axios');

  describe('NxAdapterAxios.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
