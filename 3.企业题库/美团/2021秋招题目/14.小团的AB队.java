import java.util.*;

public class MeiTuan_014 {

    static class Person {
        int index; // 第index个人，即最开始的索引
        int val;    // 实力值
        char team;  // 队伍
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int x = scanner.nextInt();
        int y = scanner.nextInt();
        Person[] people = new Person[x + y];
        for (int i = 0; i < people.length; i++) {
            people[i] = new Person();
            people[i].val = scanner.nextInt();
            people[i].index = i;
        }
        if (x == y) {   // 如果 x = y , 按序输出
            for (int i = 0; i < x; i++) {
                System.out.print('A');
            }
            for (int i = 0; i < y; i++) {
                System.out.print('B');
            }
        } else {
            Comparator<Person> compareScore = new Comparator<Person>() {
                @Override
                public int compare(Person a, Person b) {
                    /*
                        字典序判断
                        因为本代码采取的策略是 先标记最大实力的人，所以在 x > y 的时候（即先标B的时候）
                        要将重复的元素置前

                        或者也可以在 x > y 的时候 先把最小的x个人标为A队
                     */
                    if (x > y) {
                        if (a.val >= b.val)
                            return -1;
                    }else {
                        if (a.val > b.val)
                            return -1;
                    }
                    return 1;
                }
            };
            Comparator<Person> compareIndex = new Comparator<Person>() {
                @Override
                public int compare(Person a, Person b) {
                    if (a.index <= b.index)
                        return -1;
                    else return 1;
                }
            };
            // 按 实力值 从大到小排序poeple[x+y]
            Arrays.sort(people, 0, x + y, compareScore);
            if (y > x) {
                for (int i = 0; i < x; i++) {
                    people[i].team = 'A';   // 把实力最大的y个分到 A 队
                }
                for (int i = x; i < x + y; i++) {
                    people[i].team = 'B';
                }
            } else {
                for (int i = 0; i < y; i++) {
                    people[i].team = 'B';   // 把实力最大的x个分到 B 队
                }
                for (int i = y; i < x + y; i++) {
                    people[i].team = 'A';
                }
            }
            // 回归最开始的索引排序
            Arrays.sort(people, compareIndex);
            for (int i = 0; i < x + y; i++) {
                System.out.print(people[i].team);
            }
        }
    }
}


