const colors=['red','orange', 'green'];
colors.map((apple)=>apple+" apple");
// ['red apple', 'orange apple', 'green apple']
colors.map((apple, i)=>i+"번 째"+apple+" apple");
// ['0번 째red apple', '1번 째orange apple', '2번 째green apple']