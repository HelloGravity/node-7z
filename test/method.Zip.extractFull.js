/*global describe, it, afterEach */
var expect = require('chai').expect;
var fs = require('fs-extra');
var extractFull = require('../lib/extractFull');

describe('Method: `Zip.extractFull`', function () {
  
  afterEach(function () { fs.removeSync('.tmp/test'); });
  
  it('should return an error on 7z error', function (done) {
    extractFull('test/nothere.7z', '.tmp/test')
    .catch(function (err) {
      expect(err).to.be.an.instanceof(Error);
      done();
    });
  });

  it('should return an error on output duplticate', function (done) {
    extractFull('test/zip.7z', '.tmp/test', { o: '.tmp/test/duplicate' })
    .catch(function (err) {
      expect(err).to.be.an.instanceof(Error);
      done();
    });
  });
  
  it('should return entries on progress', function (done) {
    extractFull('test/zip.7z', '.tmp/test')
    .progress(function (entries) {
      expect(entries.length).to.be.at.least(1);
      done();
    });
  });
  
  it('should extract on the right path', function (done) {
    extractFull('test/zip.7z', '.tmp/test')
    .then(function () {
      expect(fs.existsSync('.tmp/test/zip')).to.be.eql(true);
      done();
    });
  });
it('should work with spaces in both source and destination', function (done) {
    fs.copySync('test/zip.7z','.tmp/Folder From/Folder A/Folder B/Folder C/zip file.7z');
    fs.mkdirsSync('.tmp/Folder To/Folder D/Folder E/Folder F/');
    extractFull('.tmp/Folder From/Folder A/Folder B/Folder C/zip file.7z','.tmp/Folder To/Folder D/Folder E/Folder F/')
    .then(function () {
      expect(fs.existsSync('.tmp/Folder To/Folder D/Folder E/Folder F/zip')).to.be.eql(true);
     fs.removeSync('.tmp/Folder From/');
    fs.removeSync('.tmp/Folder To/');
      done();
    });
  });
});