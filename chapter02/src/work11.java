// これはサンプルです。環境構築しない環境では動作しません
package typescript.level3.chapter02;

class Animal {
  public String name;
  public void walk(){}
}

class Dog {
  public String name;
  public void walk(){}
}

class Work11 {
  public static void main(String[] args) {
    Animal a1 = new Animal(); // (1) 当然OK
    Animal a2 = new Dog();    // (2) エラー。型のミスマッチ。Dog型をAnimal型に変換できない
  }
}
