chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe("Shopping List Item Behavioral Testing", () => {
  const myListItem = new ShoppingListItem("milk", "I am white and creamy.");
  it("36 ShoppingListItem is a class", () => {
    expect(myListItem).to.be.an.instanceof(ShoppingListItem);
    // expect(ShoppingListItem).to.be.a("class");
  });
  it("37 ShoppingListItem has a property named `name`", () => {
    expect(myListItem).to.have.property("name");
    // assert.property(myListItem, "name");
  });
  it("38 ShoppingListItem has a property named `description`", () => {
    expect(myListItem).to.have.property("description");
  });
  it("39 ShoppingListItem has a property named `isDone`", () => {
    expect(myListItem).to.have.property("isDone");
  });
  it("40 ShoppingListItem has a constructor method that accepts 2 arguments, `name` and `description`", () => {
    // myListItem.constructor.should.be.function;
    expect(myListItem.constructor).be.a("function");
    // expect(myListItem.constructor.name).be.a("argument");
    expect(myListItem.name).be.arguments;
  });
  it("41 the constructor method sets the new instances `name` and `description` properties using the arguments passed in", () => {
    //expect(myListItem.name).to.be.equal(ShoppingListItem);
    assert.equal(myListItem.name, "milk");
    assert.equal(myListItem.description, "I am white and creamy.");
  });
  it("42 ShoppingListItem has a method named `check`", () => {
    expect(myListItem.check).be.a("function");
  });
  it("43 calling the instance's `check` method will set it's `isDone` property to true", () => {
    myListItem.check();
    assert.equal(myListItem.isDone, "true");
  });
  it("44 ShoppingListItem has a method named `uncheck`", () => {
    expect(myListItem.uncheck).be.a("function");
  });
  it("45 calling the instance's `uncheck` method will set it's `isDone` property to false", () => {
    myListItem.uncheck();
    assert.equal(myListItem.isDone, "false");
  });
  it("46 ShoppingListItem has a method named `render`", () => {
    expect(myListItem.render).be.a("function");
  });
  it("47 calling the instance's `render` method will construct and return an html formatted string. the string content will be wrapped in `<li>` tags. ", () => {
    const html = myListItem.render();
    expect(html).include("<li");
    expect(html).include("</li>");
  });
});

describe("Shopping List Behavioral Testing", () => {
  it("66 ShoppingList is a class", () => {
    const myList = new ShoppingList();
    expect(myList).to.be.an.instanceof(ShoppingList);
  });
  it("67 ShoppingList has a property named `items`", () => {
    const myList = new ShoppingList();
    expect(myList.items).to.be.an.instanceof(Array);
  });
  it("68 ShoppingList has a constructor method that initializes `items` as an empty Array", () => {
    const myList = new ShoppingList();
    expect(myList).to.be.an.instanceof(Array).and.empty;
    expect(myList).to.have.property("constructor");
    expect(myList.items).with.lengthOf(0);
  });
  it("69 ShoppingList has a method named `addItem` that accepts a single ShoppingListItem argument", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("70 invoking the `addItem` method by passing in a ShoppingListItem object should add that object to the `items` array", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("71 invoking the `addItem` method by passing in anything else that is not a ShoppingListItem object should immediately throw an error", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("72 ShoppingList has a method named `removeItem` that accepts a single ShoppingListItem argument", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("73 invoking the `removeItem` method by passing in a ShoppingListItem object (that exists in the `items` array) should remove that object from the `items` array", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("74 invoking the `removeItem` method with no parameters should remove the last item in the `items` list, if there are any items, else it does nothing", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("75 invoking the `removeItem` method by passing in anything else that is not a ShoppingListItem object (that exists in the `items` array) should immediately throw an error", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("76 ShoppingList has a method named `render`", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
  it("77 calling the instance's `render` method will concatenate the result of calling `render()` on each item in this object's `items` array, wrapping it in a `<ul>` tags, and returning an html formatted string. ex: `<ul>...[all the li elements from ShoppingListItem.render()]...</ul>`", () => {
    const myList = new ShoppingList();
    expect(myList)
      .to.have.method("addItem")
      .expect(shoppingListItem).be.arguments;
  });
});
