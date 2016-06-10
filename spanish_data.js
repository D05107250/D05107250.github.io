var questionList = [
	//Present
	{question:"The boy eats.", answers:["El niño come."], language:"Spanish"},
	{question:"El niño come.", answers:["The boy eats.", "The child eats."], language:"English"},
	{question:"It is an apple.", answers:["Es una manzana."], language:"Spanish"},
	{question:"Es una manzana.", answers:["It is an apple.", "It's an apple."], language:"English"},
	{question:"Es una mujer.", answers:["It is a woman.", "She is a woman.", "It's a woman.", "She's a woman."], language:"English"},
	{question:"It is a woman.", answers:["Es una mujer.", "Ella es una mujer."], language:"Spanish"},
	{question:"Ella es una mujer.", answers:["She is a woman.", "She's a woman."], language:"English"},
	{question:"She is a woman.", answers:["Es una mujer.", "Ella es una mujer."], language:"Spanish"},
	{question:"Usted es una niña.", answers:["You are a girl.", "You are a child."], language:"English"},
	{question:"Tú eres una niña.", answers:["You are a girl.", "You are a child.", "You're a girl.", "You're a child."], language:"English"},
	{question:"Eres una niña.", answers:["You are a girl.", "You are a child.", "You're a girl.", "You're a child."], language:"English"},
	{question:"You are a child.", answers:["Usted es una niña.", "Tú eres una niña.", "Eres una niña.", "Usted es un niño.", "Tú eres un niño.", "Eres un niño."], language:"Spanish"},
	{question:"You are a girl.", answers:["Usted es una niña.", "Tú eres una niña.", "Eres una niña."], language:"Spanish"},
	{question:"It is a girl.", answers:["Es una niña."], language:"Spanish"},
	{question:"It is a child.", answers:["Es una niña.", "Es un niño."], language:"Spanish"},
	{question:"Es una niña.", answers:["It is a child.", "It is a girl.", "It's a child.", "It's a girl.", "She is a child.", "She is a girl.", "She's a child.", "She's a girl."], language:"English"},	
	{question:"Usted es un niño.", answers:["You are a boy.", "You are a child.", "You're a boy.", "You're a child."], language:"English"},
	{question:"Tú eres un niño.", answers:["You are a boy.", "You are a child.", "You're a boy.", "You're a child."], language:"English"},
	{question:"Eres un niño.", answers:["You are a boy.", "You are a child.", "You're a boy.", "You're a child."], language:"English"},
	{question:"You are a boy.", answers:["Usted es un niño.", "Tú eres un niño.", "Eres un niño."], language:"Spanish"},
	{question:"It is a boy.", answers:["Es un niño."], language:"Spanish"},
	{question:"Es un niño.", answers:["It is a child.", "It is a boy.", "It's a child.", "It's a boy.", "He is a child.", "He is a boy.", "He's a child.", "He's a boy."], language:"English"},
	{question:"Es un hombre.", answers:["It is a man.", "It's a man.", "He is a man.", "He's a man."], language:"English"},
	{question:"It is a man.", answers:["Es un hombre."], language:"Spanish"},
	{question:"Él es un hombre.", answers:["He is a man.", "He's a man."], language:"English"},
	{question:"He is a man.", answers:["Es un hombre.", "Él es un hombre."], language:"Spanish"},
	{question:"El hombre come.", answers:["The man eats."], language:"English"},
	{question:"The man eats.", answers:["El hombre come."], language:"Spanish"},
	{question:"Tú bebes agua.", answers:["You drink water."], language:"English"},
	{question:"You drink water.", answers:["Tú bebes agua.", "Bebes agua.", "Usted bebe agua."], language:"Spanish"},
	{question:"Yo como.", answers:["I eat."], language:"English"},
	{question:"I eat.", answers:["Como.","Yo como."], language:"English"},
	{question:"Un niño bebe.", answers:["A boy drinks."], language:"English"},
	{question:"A boy drinks.", answers:["Un niño bebe."], language:"Spanish"},
	{question:"Yo bebo.", answers:["I drink."], language:"English"},
	{question:"I drink.", answers:["Yo bebo.", "Bebo."], language:"Spanish"},
	{question:"Tú comes.", answers:["You eat."], language:"English"},
	{question:"You eat.", answers:["Tú comes.", "Comes", "Usted come."], language:"Spanish"},
	{question:"Es pan.", answers:["It's bread.", "It is bread."], language:"English"},
	{question:"It is bread.", answers:["Es pan."], language:"Spanish"},
	{question:"Es agua.", answers:["It's water.", "It is water."], language:"English"},
	{question:"It is water.", answers:["Es agua."], language:"Spanish"},	
	{question:"You are men.", answers:["Ustedes son hombres."], language:"Spanish"},	
	{question:"Ustedes son hombres.", answers:["You are men."], language:"English"},
	{question:"Somos hombres.", answers:["We are men."], language:"English"},
	{question:"We are men.", answers:["Somos hombres.", "Nosotros somos hombres."], language:"Spanish"},
	{question:"Somos mujeres.", answers:["We are women."], language:"English"},
	{question:"We are women.", answers:["Somos mujeres.", "Nosotras somos mujeres."], language:"Spanish"},
	{question:"Nosotras bebemos leche.", answers:["We drink milk."], language:"English"},
	{question:"Nosotros bebemos leche.", answers:["We drink milk."], language:"English"},
	{question:"We drink milk.", answers:["Bebemos leche.", "Nosotros bebemos leche.", "Nosotras bebemos leche."], language:"English"},
	{question:"Nosotras bebemos agua.", answers:["We drink water."], language:"English"},
	{question:"Nosotros bebemos agua.", answers:["We drink water."], language:"English"},
	{question:"We drink water.", answers:["Bebemos agua.", "Nosotros bebemos agua.", "Nosotras bebemos agua."], language:"English"},
	{question:"You are women.", answers:["Ustedes son mujeres."], language:"Spanish"},	
	{question:"Ustedes son mujeres.", answers:["You are women."], language:"English"},	
	
	
	//Past
	{question:"The boy ate.", answers:["El niño comió."], language:"Spanish"},
	{question:"El niño comió.", answers:["The boy ate.", "The child ate."], language:"English"},
	{question:"It was an apple.", answers:["Era una manzana.", "Fue una manzana."], language:"Spanish"},
	{question:"Era una manzana.", answers:["It was an apple."], language:"English"},
	{question:"Fue una mujer.", answers:["It was a woman."], language:"English"},
	{question:"It was a woman.", answers:["Fue una mujer."], language:"Spanish"},
	{question:"Era una mujer.", answers:["She was a woman."], language:"English"},
	{question:"Ella era una mujer.", answers:["She was a woman."], language:"English"},
	{question:"She was a woman.", answers:["Era una mujer.", "Ella era una mujer."], language:"Spanish"},
	{question:"Usted era una niña.", answers:["You were a girl.", "You were a child."], language:"English"},
	{question:"Tú eras una niña.", answers:["You were a girl.", "You were a child."], language:"English"},
	{question:"Eras una niña.", answers:["You were a girl.", "You were a child."], language:"English"},
	{question:"You were a child.", answers:["Usted era una niña.", "Tú eras una niña.", "Eras una niña.","Usted era un niño.", "Tú eras un niño.", "Eras un niño."], language:"Spanish"},
	{question:"You were a girl.", answers:["Usted era una niña.", "Tú eras una niña.", "Eras una niña."], language:"Spanish"},
	{question:"It was a girl.", answers:["Fue una niña."], language:"Spanish"},
	{question:"It was a child.", answers:["Fue una niña.", "Fue un niño."], language:"Spanish"},
	{question:"Fue una niña.", answers:["It was a child.", "It was a girl."], language:"English"},	
	{question:"Usted era un niño.", answers:["You were a boy.", "You were a child."], language:"English"},
	{question:"Tú eras un niño.", answers:["You were a boy.", "You were a child."], language:"English"},
	{question:"Eras un niño.", answers:["You were a boy.", "You were a child."], language:"English"},
	{question:"You were a boy.", answers:["Usted era un niño.", "Tú eras un niño.", "Eras un niño."], language:"Spanish"},
	{question:"It was a boy.", answers:["Fue un niño."], language:"Spanish"},
	{question:"Fue un niño.", answers:["It was a child.", "It was a boy."], language:"English"},
	{question:"Fue un hombre.", answers:["It was a man."], language:"English"},
	{question:"It was a man.", answers:["Fue un hombre."], language:"Spanish"},
	{question:"Era un hombre.", answers:["He was a man."], language:"English"},
	{question:"Él era un hombre.", answers:["He was a man."], language:"English"},
	{question:"He was a man.", answers:["Era un hombre.", "Él era un hombre."], language:"Spanish"},
	{question:"El hombre comió.", answers:["The man ate."], language:"English"},
	{question:"The man ate.", answers:["El hombre comió."], language:"Spanish"},
	{question:"Tú bebiste agua.", answers:["You drank water."], language:"English"},
	{question:"You drank water.", answers:["Tú bebiste agua.", "Bebiste agua.", "Usted bebió agua."], language:"Spanish"},
	{question:"Yo comí.", answers:["I ate."], language:"English"},
	{question:"I ate.", answers:["Comí.","Yo comí."], language:"English"},
	{question:"Un niño bebió.", answers:["A boy drank.","A child drank"], language:"English"},
	{question:"A boy drank.", answers:["Un niño bebió."], language:"Spanish"},
	{question:"Yo bebí.", answers:["I drank."], language:"English"},
	{question:"I drank.", answers:["Yo bebí.", "Bebí."], language:"Spanish"},
	{question:"Tú comiste.", answers:["You ate."], language:"English"},
	{question:"You ate.", answers:["Tú comiste.", "Comiste", "Usted comió."], language:"Spanish"},
	{question:"Era pan.", answers:["It was bread."], language:"English"},
	{question:"Fue pan.", answers:["It was bread."], language:"English"},
	{question:"It was bread.", answers:["Fue pan.", "Era pan."], language:"Spanish"},
	{question:"Era agua.", answers:["It was water."], language:"English"},
	{question:"Fue agua.", answers:["It was water."], language:"English"},
	{question:"It was water.", answers:["Era agua.", "Fue agua"], language:"Spanish"},	
	{question:"You were boys.", answers:["Ustedes eran niños."], language:"Spanish"},	
	{question:"Ustedes eran niños.", answers:["You were boys.","You were children."], language:"English"},
	{question:"Éramos niños.", answers:["We were boys.","We were children."], language:"English"},
	{question:"We were boys.", answers:["Éramos niños.", "Nosotros éramos niños."], language:"Spanish"},
	{question:"Éramos niñas.", answers:["We were girls.","We were children"], language:"English"},
	{question:"We were girls.", answers:["Nosotras éramos niñas", "Éramos niñas"], language:"Spanish"},
	{question:"Nosotras bebimos leche.", answers:["We drank milk."], language:"English"},
	{question:"Nosotros bebimos leche.", answers:["We drank milk."], language:"English"},
	{question:"We drank milk.", answers:["Bebimos leche.", "Nosotros bebimos leche.", "Nosotras bebimos leche."], language:"English"},
	{question:"Nosotras bebimos agua.", answers:["We drank water."], language:"English"},
	{question:"Nosotros bebimos agua.", answers:["We drank water."], language:"English"},
	{question:"We drank water.", answers:["Bebimos agua.", "Nosotros bebimos agua.", "Nosotras bebimos agua."], language:"English"},
	{question:"You were girls.", answers:["Ustedes eran niñas."], language:"Spanish"},	
	{question:"Ustedes eran niñas.", answers:["You were girls.","You were children."], language:"English"},	

	
	//Future
	{question:"The boy will eat.", answers:["El niño va a comer.", "El niño comerá."], language:"Spanish"},
	{question:"El niño comerá.", answers:["The boy will eat.", "The child will eat."], language:"English"},
	{question:"It will be an apple.", answers:["Será una manzana.", "Va a ser una manzana."], language:"Spanish"},
	{question:"Será una manzana.", answers:["It will be an apple."], language:"English"},
	{question:"Será una mujer.", answers:["It will be a woman.","She will be a woman."], language:"English"},
	{question:"It will be a woman.", answers:["Será una mujer.", "Va a ser una mujer."], language:"Spanish"},
	{question:"Ella será una mujer.", answers:["She will be a woman."], language:"English"},
	{question:"She will be a woman.", answers:["Será una mujer.", "Ella será una mujer."], language:"Spanish"},
	{question:"Usted será una mujer.", answers:["You will be a woman."], language:"English"},
	{question:"Tú serás una mujer.", answers:["You will be a woman."], language:"English"},
	{question:"Serás una mujer.", answers:["You will be a woman."], language:"English"},
	{question:"You will be a woman.", answers:["Usted será una mujer.", "Tú serás una mujer.", "Serás una mujer."], language:"Spanish"},
	{question:"It will be a girl.", answers:["Será una niña."], language:"Spanish"},
	{question:"It will be a child.", answers:["Será una niña.", "Será un niño."], language:"Spanish"},
	{question:"Usted será un hombre.", answers:["You will be a man."], language:"English"},
	{question:"Tú serás un hombre.", answers:["You will be a man."], language:"English"},
	{question:"Serás un hombre.", answers:["You will be a man."], language:"English"},
	{question:"You will be a man.", answers:["Usted será un hombre.", "Tú serás un hombre.", "Serás un hombre."], language:"Spanish"},
	{question:"It will be a boy.", answers:["Será un niño."], language:"Spanish"},
	{question:"Será un niño.", answers:["It will be a boy.", "He will be a boy."], language:"English"},
	{question:"It will be a man.", answers:["Será un hombre."], language:"Spanish"},
	{question:"Será un hombre.", answers:["He will be a man.", "It will be a man."], language:"English"},
	{question:"Él será un hombre.", answers:["He will be a man."], language:"English"},
	{question:"He will be a man.", answers:["Será un hombre.", "Él será un hombre."], language:"Spanish"},
	{question:"El hombre comerá.", answers:["The man will eat."], language:"English"},
	{question:"The man will eat.", answers:["El hombre comerá."], language:"Spanish"},
	{question:"Tú beberás agua.", answers:["You will drink water."], language:"English"},
	{question:"You will drink water.", answers:["Tú beberás agua.", "Beberás agua.", "Usted beberá agua."], language:"Spanish"},
	{question:"Yo comeré.", answers:["I will eat."], language:"English"},
	{question:"I will eat.", answers:["Comeré.","Yo comeré."], language:"English"},
	{question:"Un niño beberá.", answers:["A boy will drink."], language:"English"},
	{question:"A boy will drink.", answers:["Un niño beberá."], language:"Spanish"},
	{question:"Yo beberé.", answers:["I will drink."], language:"English"},
	{question:"I will drink.", answers:["Yo beberé.", "Beberé."], language:"Spanish"},
	{question:"Tú comerás.", answers:["You will eat."], language:"English"},
	{question:"You will eat.", answers:["Tú comerás.", "Comerás.", "Usted comerá."], language:"Spanish"},
	{question:"Será pan.", answers:["It will be bread."], language:"English"},
	{question:"It will be bread.", answers:["Será pan."], language:"Spanish"},
	{question:"Será agua.", answers:["It will be water."], language:"English"},
	{question:"It will be water.", answers:["Será agua."], language:"Spanish"},	
	{question:"You will be men.", answers:["Ustedes serán hombres."], language:"Spanish"},	
	{question:"Ustedes serán hombres.", answers:["You will be men."], language:"English"},
	{question:"Seremos hombres.", answers:["We will be men."], language:"English"},
	{question:"We will be men.", answers:["Seremos hombres.", "Nosotros seremos hombres."], language:"Spanish"},
	{question:"Seremos mujeres.", answers:["We will be women"], language:"English"},
	{question:"We will be women.", answers:["Nosotras seremos mujeres", "Seramos mujeres"], language:"Spanish"},
	{question:"Nosotras beberemos leche.", answers:["We will drink milk."], language:"English"},
	{question:"Nosotros beberemos leche.", answers:["We will drink milk."], language:"English"},
	{question:"We will drink milk.", answers:["Beberemos leche.", "Nosotros beberemos leche.", "Nosotras beberemos leche."], language:"English"},
	{question:"Nosotras beberemos agua.", answers:["We will drink water."], language:"English"},
	{question:"Nosotros beberemos agua.", answers:["We will drink water."], language:"English"},
	{question:"We will drink water.", answers:["Beberemos agua.", "Nosotros beberemos agua.", "Nosotras beberemos agua."], language:"English"},
	{question:"You will be women.", answers:["Ustedes serán mujeres."], language:"Spanish"},	
	{question:"Ustedes serán mujeres.", answers:["You will be women."], language:"English"}
];
