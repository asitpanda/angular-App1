'use strict';

angular.module('UserProfileApp')
	.filter('userCurrency', ['currencyFilter', function (currencyFilter) {
		var userCurrency = function (input) {
			if (isNaN(Number(input))) {
				return input;
			}
		    var divisor = 1000 * 1000 * 1000;
		    var symbol = '';
		    var value = input;
		    if (Math.abs(input) >= divisor) {
		      value = input / divisor;
		      symbol = 'B';
		    } else {
		      divisor = divisor / 1000;
		      if (Math.abs(input) >= divisor) {
		        value = input / divisor;
		        symbol = 'M';
		      } else {
						divisor = divisor / 1000;
						if (Math.abs(input) >= divisor) {
							value = input / divisor;
							symbol = 'K';
						}
		      }
		    }
		    return currencyFilter(value, "", 1) + ' ' + symbol;
		};
		userCurrency.$stateful = true;
		return userCurrency;
	}]);