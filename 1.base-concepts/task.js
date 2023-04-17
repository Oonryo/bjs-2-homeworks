"use strict";
/* ---- Задача №1 ---- */
function solveEquation(a, b, c) {
	let arr = [];

	//  Дискриминант:
	let d = b ** 2 - 4 * a * c;

	if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}
	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}

	return arr;
}
/* ---- Задача №2 ---- */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) === true) {
		return false;
	} else {
		let P = (percent / 100) / 12;
		let S = amount - contribution;
		let paymentInMonths = (S * (P + (P / (((1 + P) ** countMonths) - 1))));
		let totalPayment = Number((paymentInMonths * countMonths).toFixed(2));
		return totalPayment
	}
}