// これはサンプルです。環境構築しない環境では動作しません
package typescript.level3.chapter02;

class Animal {
  public String name;
  public void walk(){}
}

class Dog extends Animal {}

class Human {
  public String name;
  public void walk(){}
}

class Work10 {
  public static void main(String[] args) {
    Animal a1 = new Animal(); // (1) 当然OK
    Animal a2 = new Dog();    // (2) これもOK
    
    Human h1 = new Animal(); // (3) これは当然エラー
    Human h2 = new Dog();    // (4) これも当然エラー
    
    Animal a3 = new Human(); // (5) これも当然エラー
  }
}
