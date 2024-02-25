// Write your solution in this file
var customerName = 'bob'
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
      customerName = customerName.toUpperCase();
      return customerName;
    } else {
      return 'Customer name is not a string';
    }
  }
  function setBestCustomer() {
    bestCustomer = "not bob";
  }
  function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
  }
  const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob';
}
  
