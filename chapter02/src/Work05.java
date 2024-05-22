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

class Work05 {
  public static void main(String[] args) {
    Animal a = new Animal(); // (1)
    Dog d = a; // (2) エラー。型がミスマッチ。Animal型をDog型に変換できない！
  }
}
