public class Item {
	int creditPrice;
	String name;
	String description;
	int index;
	
	public Item(int creditPrice, String name, String description, int index) {
		this.creditPrice = creditPrice;
		this.name = name;
		this.description = description;
		this.index = index;
	}
	
	public String getItemName() {
		return name;
	}
	
	public int getItemPrice() {
		return creditPrice;
	}
	
	public String getItemDescription() {
		return description;
	}
	
	public int getIndex() {
		return index;
	}
	

}
