let list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];

var findRestaurant = function(list1, list2) {
    let a = list1, b = list2;
    let r = new Object();
    if (list1.length > list2.length) {
    	a = list2;
    	b = list1;
    }

    for (let i = 0; i < a.length; i++) {
    	if (b.indexOf(a[i]) != -1) {
    		if (r[i + b.indexOf(a[i])] == undefined) r[i + b.indexOf(a[i])] = [a[i]];
    		else r[i + b.indexOf(a[i])].push(a[i]);
    		b[b.indexOf(a[i])] = null;
    	}
    }

    return r[Object.keys(r)[0]];
};

console.log(findRestaurant(list1, list2));
