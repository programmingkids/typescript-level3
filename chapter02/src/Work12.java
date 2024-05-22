// これはサンプルです。環境構築しない環境では動作しません
package typescript.level3.chapter02;

class Animal {
  public String name;
  public void walk(){}
}

class Dog extends Animal {}

class Work12 {
  public static void main(String[] args) {
    Animal a1 = new Animal(); // (1) 同一型なのでOK
    Dog d1 = new Dog();       // (2) 同一型なのでOK
    Animal a2 = new Dog();    // (3) 部分型なのでOK
    Dog d2 = new Animal();    // (4) エラー。型のミスマッチ。Dog型をAnimal型に変換できない
  }
}
