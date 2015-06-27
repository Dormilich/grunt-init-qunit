/*
======== A Handy Little QUnit Reference ========
  http://api.qunitjs.com/

  Test methods:
    module(name, {[beforeEach][, afterEach]})
    test(name, callback)
  Test assertions:
    expect(numberOfAssertions)
    async()
    ok(value, [message])
    notOk(value, [message])
    equal(actual, expected, [message])
    notEqual(actual, expected, [message])
    deepEqual(actual, expected, [message])
    notDeepEqual(actual, expected, [message])
    strictEqual(actual, expected, [message])
    notStrictEqual(actual, expected, [message])
    throws(block, [expected], [message])
*/

(function (window, document, QUnit) {

    QUnit.begin(function () {
        // run before the QUnit run
    });

    QUnit.done(function () {
        // run after the QUnit run
    });

    QUnit.module('example', {
        beforeEach: function() {
            this.foo = 'some value';
        },
        afterEach: function () {
            this.foo = null;
        }
    });

    QUnit.test('regular test', function (assert) {
        assert.expect(1);
        assert.strictEqual(this.foo, 'some value', 'should be "some value"');
    });

    QUnit.test('asynchronous test', function (assert) {
        assert.expect(1);
        var done = assert.async();
        var foo  = this.foo;

        window.setTimeout(function () {
            assert.strictEqual(foo, 'some value', 'should be "some value"');
            done();
        }, 100);
    });

}(window, document, QUnit));
