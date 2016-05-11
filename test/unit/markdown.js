'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const repos = require('../../server/repositories');
const services = require('../../server/facade');
const helpers = require('../../server/helpers');

require('sinon-as-promised');
chai.use(chaiAsPromised);

describe('Markdown', () => {

  describe('Markdown module', () => {
    beforeEach(() => {
      sinon.stub(repos.markdown, 'create');
      sinon.stub(repos.markdown, 'findById');
      sinon.stub(repos.markdown, 'findAllMarkDowns');
    });

    afterEach(() => {
      repos.markdown.create.restore();
      repos.markdown.findById.restore();
      repos.markdown.findAllMarkDowns.restore();
    });

    it('should convert h1 and returns the db document', (done) => {

      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "#heading1",
        "processedHtml": "<h1>heading1</h1>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '#heading1'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "#heading1",
          "processedHtml": "<h1>heading1</h1>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert h2 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "##heading2",
        "processedHtml": "<h2>heading2</h2>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '##heading2'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "##heading2",
          "processedHtml": "<h2>heading2</h2>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert h3 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "###heading3",
        "processedHtml": "<h3>heading3</h3>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '###heading3'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "###heading3",
          "processedHtml": "<h3>heading3</h3>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert h4 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "####heading4",
        "processedHtml": "<h4>heading4</h4>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '####heading4'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "####heading4",
          "processedHtml": "<h4>heading4</h4>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert h5 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "#####heading5",
        "processedHtml": "<h5>heading5</h5>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '#####heading5'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "#####heading5",
          "processedHtml": "<h5>heading5</h5>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert h6 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "######heading6",
        "processedHtml": "<h6>heading6</h6>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '######heading6'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "######heading6",
          "processedHtml": "<h6>heading6</h6>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert alternate h1 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "heading1\n===",
        "processedHtml": "<h1>heading1</h1>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: 'heading1\n==='
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "heading1\n===",
          "processedHtml": "<h1>heading1</h1>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert alternate h2 and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:09:34.589Z",
        "createdAt": "2016-05-11T06:09:34.589Z",
        "rawMarkDown": "heading2\n---",
        "processedHtml": "<h2>heading2</h2>",
        "title": "Some",
        "_id": "5732cc9e078fd1f61b397bcb"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: 'heading2\n---'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:09:34.589Z",
          "createdAt": "2016-05-11T06:09:34.589Z",
          "rawMarkDown": "heading2\n---",
          "processedHtml": "<h2>heading2</h2>",
          "title": "Some",
          "_id": "5732cc9e078fd1f61b397bcb"
        })
        .notify(done);
    });

    it('should convert quote and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:48:45.285Z",
        "createdAt": "2016-05-11T06:48:45.285Z",
        "rawMarkDown": "> blockquote\n",
        "processedHtml": "<blockquote><p>blockquote</p></blockquote>",
        "title": "Some",
        "_id": "5732d5cd078fd1f61b397bcd"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '> blockquote\n'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:48:45.285Z",
          "createdAt": "2016-05-11T06:48:45.285Z",
          "rawMarkDown": "> blockquote\n",
          "processedHtml": "<blockquote><p>blockquote</p></blockquote>",
          "title": "Some",
          "_id": "5732d5cd078fd1f61b397bcd"
        })
        .notify(done);
    });

    it('should convert simple line and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:50:37.263Z",
        "createdAt": "2016-05-11T06:50:37.263Z",
        "rawMarkDown": "\nparagraph\n",
        "processedHtml": "<p>paragraph</p>",
        "title": "Some",
        "_id": "5732d63d078fd1f61b397bd0"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '\nparagraph\n'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:50:37.263Z",
          "createdAt": "2016-05-11T06:50:37.263Z",
          "rawMarkDown": "\nparagraph\n",
          "processedHtml": "<p>paragraph</p>",
          "title": "Some",
          "_id": "5732d63d078fd1f61b397bd0"
        })
        .notify(done);
    });

    it('should convert em (_.._) and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:51:43.210Z",
        "createdAt": "2016-05-11T06:51:43.210Z",
        "rawMarkDown": "_element_",
        "processedHtml": "<em>element</em>",
        "title": "Some",
        "_id": "5732d67f078fd1f61b397bd1"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '_element_'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:51:43.210Z",
          "createdAt": "2016-05-11T06:51:43.210Z",
          "rawMarkDown": "_element_",
          "processedHtml": "<em>element</em>",
          "title": "Some",
          "_id": "5732d67f078fd1f61b397bd1"
        })
        .notify(done);
    });

    it('should convert strong(**..**) and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:52:31.987Z",
        "createdAt": "2016-05-11T06:52:31.987Z",
        "rawMarkDown": "**Bold**",
        "processedHtml": "<strong>Bold</strong>",
        "title": "Some",
        "_id": "5732d6af078fd1f61b397bd2"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '**Bold**'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:52:31.987Z",
          "createdAt": "2016-05-11T06:52:31.987Z",
          "rawMarkDown": "**Bold**",
          "processedHtml": "<strong>Bold</strong>",
          "title": "Some",
          "_id": "5732d6af078fd1f61b397bd2"
        })
        .notify(done);
    });

    it('should convert em(*..*) and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:53:29.566Z",
        "createdAt": "2016-05-11T06:53:29.566Z",
        "rawMarkDown": "*italic*",
        "processedHtml": "<em>italic</em>",
        "title": "Some",
        "_id": "5732d6e9078fd1f61b397bd3"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '*italic*'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:53:29.566Z",
          "createdAt": "2016-05-11T06:53:29.566Z",
          "rawMarkDown": "*italic*",
          "processedHtml": "<em>italic</em>",
          "title": "Some",
          "_id": "5732d6e9078fd1f61b397bd3"
        })
        .notify(done);
    });

    it('should convert strike through(~~..~~) and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:57:42.249Z",
        "createdAt": "2016-05-11T06:57:42.249Z",
        "rawMarkDown": "~~strike~~",
        "processedHtml": "<del>strike</del>",
        "title": "Some",
        "_id": "5732d7e6078fd1f61b397bd4"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '~~strike~~'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:57:42.249Z",
          "createdAt": "2016-05-11T06:57:42.249Z",
          "rawMarkDown": "~~strike~~",
          "processedHtml": "<del>strike</del>",
          "title": "Some",
          "_id": "5732d7e6078fd1f61b397bd4"
        })
        .notify(done);
    });

    it('should convert link and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:58:38.279Z",
        "createdAt": "2016-05-11T06:58:38.279Z",
        "rawMarkDown": "[I am google](https://www.google.com.pk, 'I am Google')",
        "processedHtml": "<a href=\"https://www.google.com.pk,\" title='I am Google'>I am google</a>",
        "title": "Some",
        "_id": "5732d81e078fd1f61b397bd5"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '[I am google](https://www.google.com.pk, "I am Google")'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:58:38.279Z",
          "createdAt": "2016-05-11T06:58:38.279Z",
          "rawMarkDown": "[I am google](https://www.google.com.pk, 'I am Google')",
          "processedHtml": "<a href=\"https://www.google.com.pk,\" title='I am Google'>I am google</a>",
          "title": "Some",
          "_id": "5732d81e078fd1f61b397bd5"
        })
        .notify(done);
    });

    it('should convert code(```..```) and returns the db document', (done) => {
      repos.markdown.create.resolves({
        "__v": 0,
        "updatedAt": "2016-05-11T06:59:47.612Z",
        "createdAt": "2016-05-11T06:59:47.612Z",
        "rawMarkDown": "```it is a code```",
        "processedHtml": "<pre>it is a code</pre>",
        "title": "Some",
        "_id": "5732d863078fd1f61b397bd6"
      });

      expect(services.markdown.v1.saveMarkDown({
        title: 'Sample Markdown',
        markdown: '```it is a code```'
      }))
        .to.eventually.be.eql(
        {
          "__v": 0,
          "updatedAt": "2016-05-11T06:59:47.612Z",
          "createdAt": "2016-05-11T06:59:47.612Z",
          "rawMarkDown": "```it is a code```",
          "processedHtml": "<pre>it is a code</pre>",
          "title": "Some",
          "_id": "5732d863078fd1f61b397bd6"
        })
        .notify(done);
    });

    it('should get the Markdown by id', (done) => {

      repos.markdown.findById.resolves({
        "_id": "5732dcf3078fd1f61b397bda",
        "updatedAt": "2016-05-11T07:19:15.703Z",
        "createdAt": "2016-05-11T07:19:15.703Z",
        "rawMarkDown": "> quote\n",
        "processedHtml": "<blockquote><p>quote</p></blockquote>",
        "title": "Some"
      });

      expect(services.markdown.v1.getMarkDownById('5732dcf3078fd1f61b397bda'))
        .to.eventually.be.eql(
        {
          "_id": "5732dcf3078fd1f61b397bda",
          "updatedAt": "2016-05-11T07:19:15.703Z",
          "createdAt": "2016-05-11T07:19:15.703Z",
          "rawMarkDown": "> quote\n",
          "processedHtml": "<blockquote><p>quote</p></blockquote>",
          "title": "Some"
        })
        .notify(done);
    });

    it('should get all the mark down', (done) => {

      repos.markdown.findAllMarkDowns.resolves([
        {
          "_id": "5732de7f078fd1f61b397bdc",
          "createdAt": "2016-05-11T07:25:51.104Z",
          "title": "Some"
        },
        {
          "_id": "5732dd23078fd1f61b397bdb",
          "createdAt": "2016-05-11T07:20:03.180Z",
          "title": "Some"
        },
        {
          "_id": "5732dcf3078fd1f61b397bda",
          "createdAt": "2016-05-11T07:19:15.703Z",
          "title": "Some"
        },
        {
          "_id": "5732db51078fd1f61b397bd9",
          "createdAt": "2016-05-11T07:12:17.288Z",
          "title": "Some"
        },
        {
          "_id": "5732db45078fd1f61b397bd8",
          "createdAt": "2016-05-11T07:12:05.322Z",
          "title": "Some"
        }
      ]);

      expect(services.markdown.v1.getAllMarkDowns())
        .to.eventually.be.eql(
        [
          {
            "_id": "5732de7f078fd1f61b397bdc",
            "createdAt": "2016-05-11T07:25:51.104Z",
            "title": "Some"
          },
          {
            "_id": "5732dd23078fd1f61b397bdb",
            "createdAt": "2016-05-11T07:20:03.180Z",
            "title": "Some"
          },
          {
            "_id": "5732dcf3078fd1f61b397bda",
            "createdAt": "2016-05-11T07:19:15.703Z",
            "title": "Some"
          },
          {
            "_id": "5732db51078fd1f61b397bd9",
            "createdAt": "2016-05-11T07:12:17.288Z",
            "title": "Some"
          },
          {
            "_id": "5732db45078fd1f61b397bd8",
            "createdAt": "2016-05-11T07:12:05.322Z",
            "title": "Some"
          }
        ])
        .notify(done);
    });
  });

  describe('Markdown processor', () => {

    it('should convert h1 and returns html', (done) => {

      expect(helpers.markdown.processPayload('#heading1'))
        .to.eventually.be.eql("<h1>heading1</h1>")
        .notify(done);
    });

    it('should convert h2 and returns the db document', (done) => {

      expect(helpers.markdown.processPayload('##heading2'))
        .to.eventually.be.eql("<h2>heading2</h2>")
        .notify(done);

    });

    it('should convert h3 and returns html', (done) => {

      expect(helpers.markdown.processPayload('###heading3'))
        .to.eventually.be.eql("<h3>heading3</h3>")
        .notify(done);

    });

    it('should convert h4 and returns html', (done) => {

      expect(helpers.markdown.processPayload('####heading4'))
        .to.eventually.be.eql("<h4>heading4</h4>")
        .notify(done);

    });

    it('should convert h5 and returns html', (done) => {

      expect(helpers.markdown.processPayload('#####heading5'))
        .to.eventually.be.eql("<h5>heading5</h5>")
        .notify(done);

    });

    it('should convert h6 and returns html', (done) => {

      expect(helpers.markdown.processPayload('######heading6'))
        .to.eventually.be.eql("<h6>heading6</h6>")
        .notify(done);

    });

    it('should convert alternate h1 and returns html', (done) => {

      expect(helpers.markdown.processPayload('heading\n==='))
        .to.eventually.be.eql('<h1 style="border-bottom: 1px solid #eee">heading</h1>\n')
        .notify(done);

    });

    it('should convert alternate h2 and returns html', (done) => {

      expect(helpers.markdown.processPayload('heading2\n---'))
        .to.eventually.be.eql('<h2 style="border-bottom: 1px solid #eee">heading2</h2>')
        .notify(done);

    });

    it('should convert quote and returns html', (done) => {

      expect(helpers.markdown.processPayload('> quote\n'))
        .to.eventually.be.eql("<blockquote><p>quote</p></blockquote>")
        .notify(done);

    });

    it('should convert simple line and returns html', (done) => {

      expect(helpers.markdown.processPayload('\nparagraph\n'))
        .to.eventually.be.eql("<p>paragraph</p>")
        .notify(done);

    });

    it('should convert em (_.._) and returns html', (done) => {

      expect(helpers.markdown.processPayload('_italic_'))
        .to.eventually.be.eql("<em>italic</em>")
        .notify(done);

    });

    it('should convert strong(**..**) and returns html', (done) => {

      expect(helpers.markdown.processPayload('**Bold**'))
        .to.eventually.be.eql("<strong>Bold</strong>")
        .notify(done);

    });

    it('should convert em(*..*) and returns html', (done) => {

      expect(helpers.markdown.processPayload('*italic*'))
        .to.eventually.be.eql("<em>italic</em>")
        .notify(done);

    });

    it('should convert strike through(~~..~~) and returns html', (done) => {

      expect(helpers.markdown.processPayload('~~strike~~'))
        .to.eventually.be.eql("<del>strike</del>")
        .notify(done);

    });

    it('should convert link and returns the html', (done) => {

      expect(helpers.markdown.processPayload('[I am google](https://www.google.com.pk, "I am google")'))
        .to.eventually.be.eql('<a href=\"https://www.google.com.pk,\" title="I am google">I am google</a>')
        .notify(done);

    });

    it('should convert code(```..```) and returns the db document', (done) => {

      expect(helpers.markdown.processPayload('```code block```'))
        .to.eventually.be.eql("<pre>code block</pre>")
        .notify(done);

    });

  });

});
