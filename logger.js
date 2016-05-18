const canLog = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default {
  log: canLog ? (...args) => console.log('env-loader:', ...args) : function() {},
}
