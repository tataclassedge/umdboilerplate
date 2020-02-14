module.exports = {
  name: 'umd',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/umd',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
