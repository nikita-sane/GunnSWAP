import java.util.ArrayList;
public class Account {
	int credits = 0;
	String name;
	int idNumber;
	ArrayList<Item> itemsSold = new ArrayList<Item>();
	
	
	public Account(String name, int idNumber, int credits) {
		this.name = name;
		this.idNumber = idNumber;
		this.credits = credits;
	}
	
	public void sellItem(Item clothing) {
		itemsSold.add(clothing);
		Main.allItems.add(clothing);
		credits += clothing.getItemPrice();
	}
	
	public void buyItem(Item clothing) {
		credits -= clothing.getItemPrice();
		if (Main.allItems.contains(clothing)) {
			Main.allItems.remove(clothing);
		}
		else {
			System.out.println("This item is not available to buy!");
			}
	}
	
	public String getName() {
		return name;
	}
	
	public int getCredits() {
		return credits;
	}
	
	public int getId() {
		return idNumber;
	}
	
	public void printItemsSold() {
		for (int i = 0; i < itemsSold.size(); i ++) {
			System.out.println("Item: " + itemsSold.get(i).getItemName());
			System.out.println("Price: " + itemsSold.get(i).getItemPrice());
			System.out.println("Description: " + itemsSold.get(i).getItemDescription());
			System.out.println();
		}
	}
}
