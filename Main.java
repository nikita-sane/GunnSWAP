import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	static ArrayList<Account> people;
	static ArrayList<Item> allItems = new ArrayList<Item>();
	static Account person = new Account("default", 950, 0);

	public static void main(String[] args) {
		people =  new ArrayList<Account>();
		Account nikita = new Account("nikita", 95032924, 50);
		people.add(nikita);
		Account melinda = new Account("melinda", 95039846, 20);
		people.add(melinda);
		Account olivia = new Account("olivia", 95034422, 100);
		people.add(olivia);
		manageTasks();

	}

	public static void getPeople() {
		for (int i = 0; i < people.size(); i ++) { 
			System.out.println("Name: " + people.get(i).getName());
			System.out.println("Credits: " + people.get(i).getCredits());
			System.out.println();
		}
	}

	public static void getAllItems() {
		for (int i = 0; i < allItems.size(); i ++) { 
			System.out.print(allItems.get(i).getItemName() + ", ");
		}
		System.out.println();
		System.out.println();
	}

	public static void manageTasks() {
		Scanner scn;
		scn = new Scanner(System.in);
		try {
			while (2 < 3) {
				System.out.print("Enter ID Number: ");
				String userIdNum = scn.nextLine();
				int idNum =  Integer.parseInt(userIdNum);
				for (int j = 0; j < people.size(); j ++) {
					if (people.get(j).getId() == idNum) {
						person = people.get(j);
					}
				}
				while (2 < 3) {
					System.out.println("[1] Show account details");
					System.out.println("[2] Sell");
					System.out.println("[3] Buy");
					System.out.println("[4] Quit");
					System.out.print("Selection: ");
					String task = scn.nextLine();

					if (task.equals("1")) {
						System.out.println("Name: " + person.getName());
						System.out.println("Credits Available" + person.getCredits());
						System.out.println("Items Sold: ");
						System.out.println();
						person.printItemsSold();
					}

					else if (task.equals("2")) {
						System.out.println("Item price: ");
						String price = scn.nextLine();
						System.out.println("Item name: ");
						String name = scn.nextLine();
						System.out.println("Item description: ");
						String description = scn.nextLine();
						int priceInt = Integer.parseInt(price);
						Item clothing = new Item(priceInt, name, description, allItems.size());
						person.sellItem(clothing);
					}

					else if (task.equals("3")) {
						System.out.println("Item index: ");
						String index = scn.nextLine();
						int ind = Integer.parseInt(index);
						for (int i = 0; i < allItems.size(); i ++) {
							if (allItems.get(i).getIndex() == ind) {
								person.buyItem(allItems.get(i));
							}
						}
					}
					else if (task.equals("4")) {
						break;
					}
					else {
						System.out.println("Unknown request!");
					}
				}
			}
		}
		finally {
			scn.close();
		}

	}

}

