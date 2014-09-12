


/*
xdescribe('Angularjs demo homepage',function(){

	beforeEach(function(){

		browser.get('http://localhost:8000/');

	});


	it('should have a title',function(){
		//browser.get('http://localhost:8000/');
		browser.sleep(10000);
		expect(element(by.tagName('h1')).getText()).toEqual('Artist Pages');
		


	});

});

*/


describe('Angularjs Search feature',function(){

	beforeEach(function(){

		browser.get('http://localhost:8000/');

	});

/*	xit('should be able to do a valid search',function(){

		element(by.model('query')).sendKeys('Hillary');

	 	//expect(element(by.css('.info')).isPresent()).toBe(true);

	 	expect(element(by.css('.info')).isPresent()).toBeTruthy();
	 	element(by.css('.info')).click();

	 	expect(element(by.css('h1.ng-binding')).getText()).toEqual('Hillary Hewitt Goldwynn-Post')

	});*/

	it('should seach and sort results', function(){

			element(by.model('query')).sendKeys('Jo');

			var AscList = element.all(by.repeater('item in artists'));

			element.all(by.model('direction')).get(1).click();

			var descList  = element.all(by.repeater('item in artists'));

			expect(AscList[0]).toEqual(descList[descList -1]);

			expect(AscList[AscList.length - 1]).toEqual(descList[0]);

			//browser.sleep('10000');

			

			

			

	});




});