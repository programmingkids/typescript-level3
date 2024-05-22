// これはサンプルです。環境構築しない環境では動作しません
using System;

class Animal {
  public string name;
  public void walk() {}
}

class Dog {
  public string name;
  public void walk() {}
}

class Work06 {
    static void Main(string[] args)
    {
      Animal a = new Animal(); // (1)
      Dog d = a; // (2) エラー。Animal型をDog型に暗黙的な変換できない！
    }
}
