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
	{question:"Nosotras somos niñas.", answers:["We are girls.","We are children."], language:"English"},	
	{question:"We are girls.", answers:["Nosotras somos niñas.","Somos niñas."], language:"Spanish"},	
	{question:"Ellas son niñas.", answers:["They are girls.","They are children."], language:"Spanish"},	
	{question:"They are girls.", answers:["Ellas son niñas.","Son niñas."], language:"Spanish"},	
	{question:"You drink water.", answers:["Tú bebes agua.", "Bebes agua.", "Usted bebe agua.", "Ustedes beben agua."], language:"Spanish"},
	{question:"Ustedes beben agua.", answers:["You drink water."], language:"Spanish"},
	{question:"Ellas son mujeres.", answers:["They are women."], language:"English"},	
	{question:"They are women.", answers:["Ellas son mujeres.", "Son mujeres."], language:"English"},	
	{question:"Ellos son hombres.", answers:["They are men."], language:"English"},	
	{question:"They are men.", answers:["Ellos son hombres.", "Son hombres."], language:"English"},	
	{question:"You drink milk.", answers:["Tú bebes leche.","Bebes leche.","Usted bebe leche.","Ustedes beben leche."], language:"Spanish"},
	{question:"Nosotros somos niños.", answers:["We are boys.","We are children."], language:"English"},	
	{question:"We are boys.", answers:["Nosotros somos niños.","Somos niños."], language:"Spanish"},	
	{question:"They drink.", answers:["Beben.","Ellos beben.","Ellas beben."], language:"Spanish"},	
	{question:"Ellos beben.", answers:["They drink."], language:"English"},	
	{question:"Las niñas beben agua.", answers:["The girls drink water.","The children drink water."], language:"English"},	
	{question:"The girls drink water.", answers:["Las niñas beben agua."], language:"Spanish"},	
	{question:"Los niños beben agua.", answers:["The boys drink water.","The children drink water."], language:"English"},	
	{question:"The boys drink water.", answers:["Los niños beben agua."], language:"Spanish"},		
	{question:"Tú escribes un libro.", answers:["You write a book."], language:"English"},	
	{question:"You write a book.", answers:["Tú escribes un libro.","Escribes un libro.","Usted escribe un libro.","Ustedes escriben un libro."], language:"Spanish"},	
	{question:"Usted escribe un libro.", answers:["You write a book."], language:"English"},
	{question:"Yo escribo una carta.", answers:["I write a letter."], language:"English"},		
	{question:"I write a letter.", answers:["Yo escribo una carta.","Escribo una carta."], language:"Spanish"},		
	{question:"Nosotros escribimos un libro.", answers:["We write a book.","We wrote a book."], language:"English"},		
	{question:"We write a book.", answers:["Nosotros escribimos un libro.","Nosotras escribimos un libro.","Escribimos un libro."], language:"Spanish"},		
	{question:"Ellas beben vino.", answers:["They drink wine."], language:"English"},		
	{question:"They drink wine.", answers:["Ellas beben vino.","Ellos beben vino.","Beben vino."], language:"Spanish"},		
	{question:"I drink wine.", answers:["Yo bebo vino.","Bebo vino."], language:"Spanish"},		
	{question:"Yo bebo vino.", answers:["I drink wine."], language:"English"},	
	{question:"Tú lees el libro.", answers:["You read the book."], language:"English"},	
	{question:"You read the book. (present tense)", answers:["Tú lees el libro.","Lees el libro.","Usted lee el libro.","Ustedes leen el libro."], language:"Spanish"},	
	{question:"Las niñas escriben.", answers:["The girls write.","The children write."], language:"English"},	
	{question:"The girls write.", answers:["Las niñas escriben."], language:"Spanish"},	
	{question:"Ella es una persona.", answers:["She is a person."], language:"English"},	
	{question:"She is a person.", answers:["Ella es una persona.","Es una persona."], language:"Spanish"},	
	{question:"Yo leo.", answers:["I read."], language:"English"},	
	{question:"I read. (present tense)", answers:["Yo leo.","Leo."], language:"English"},
	{question:"El niño lee.", answers:["The boy reads.","The child reads."], language:"English"},	
	{question:"The boy reads.", answers:["El niño lee."], language:"English"},	
	{question:"Él es una persona.", answers:["He is a person."], language:"English"},	
	{question:"He is a person.", answers:["Él es una persona.","Es una persona."], language:"Spanish"},	
	{question:"Nosotros leemos un diario.", answers:["We read a newspaper."], language:"English"},	
	{question:"We read a newspaper. (present tense)", answers:["Nosotros leemos un diario.","Nosotras leemos un diario.","Leemos un diario."], language:"Spanish"},	
	{question:"Ellas leen.", answers:["They read."], language:"English"},	
	{question:"They read. (present tense)", answers:["Ellas leen.","Ellos leen.","Leen."], language:"Spanish"},	
	{question:"Ellos leen un libro.", answers:["They read a book."], language:"English"},	
	{question:"They read a book. (present tense)", answers:["Ellas leen un libro.","Ellos leen un libro.","Leen un libro."], language:"Spanish"},	
	{question:"Nosotras comemos arroz.", answers:["We eat rice."], language:"English"},	
	{question:"Nosotros comemos arroz.", answers:["We eat rice."], language:"English"},	
	{question:"We eat rice.", answers:["Nosotras comemos arroz.","Nosotros comemos arroz.","Comemos arroz."], language:"Spanish"},	
	{question:"Yo cocino pescado.", answers:["I cook fish."], language:"English"},	
	{question:"I cook fish.", answers:["Yo cocino pescado.","Cocino pescado."], language:"Spanish"},	
	{question:"Ellos no comen nada.", answers:["They do not eat anything.","They don't eat anything."], language:"English"},	
	{question:"They do not eat anything.", answers:["Ellos no comen nada.","Ellas no comen nada.","No comen nada."], language:"Spanish"},
	{question:"No cocino.", answers:["I do not cook.","I don't cook."], language:"English"},	
	{question:"I do not cook.", answers:["Yo no cocino.","No cocino."], language:"Spanish"},	
	
	
	
	
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
	{question:"Nosotras Éramos niñas.", answers:["We were girls.","We were children."], language:"English"},	
	{question:"Ellas eran niñas.", answers:["They were girls.","They were children."], language:"Spanish"},	
	{question:"They were girls.", answers:["Ellas eran niñas.","Eran niñas."], language:"Spanish"},	
	{question:"You drank water.", answers:["Tú bebiste agua.", "Bebiste agua.", "Usted bebió agua.", "Ustedes bebieron agua."], language:"Spanish"},
	{question:"Ustedes bebieron agua.", answers:["You drank water."], language:"Spanish"},
	{question:"You drank milk.", answers:["Tú bebiste leche.","Bebiste leche.","Usted bebió leche.","Ustedes bebieron leche."], language:"Spanish"},
	{question:"Nosotros éramos niños.", answers:["We were boys.","We were children."], language:"English"},	
	{question:"We were boys.", answers:["Nosotros éramos niños.","Éramos niños."], language:"Spanish"},	
	{question:"They drank.", answers:["Bebieron.","Ellos bebieron.","Ellas bebieron."], language:"Spanish"},	
	{question:"Ellos bebieron.", answers:["They drank."], language:"English"},	
	{question:"Las niñas bebieron agua.", answers:["The girls drank water.","The children drank water."], language:"English"},	
	{question:"The girls drank water.", answers:["Las niñas bebieron agua."], language:"Spanish"},	
	{question:"Los niños bebieron agua.", answers:["The boys drank water.","The children drank water."], language:"English"},	
	{question:"The boys drank water.", answers:["Los niños bebieron agua."], language:"Spanish"},	
	{question:"Tú escribiste un libro.", answers:["You wrote a book."], language:"English"},	
	{question:"You wrote a book.", answers:["Tú escribiste un libro.","Escribiste un libro.","Usted escribió un libro.","Ustedes escribieron un libro."], language:"Spanish"},	
	{question:"Usted escribió un libro.", answers:["You wrote a book."], language:"English"},
	{question:"Yo escribí una carta.", answers:["I wrote a letter."], language:"English"},		
	{question:"I wrote a letter.", answers:["Yo escribí una carta.","Escribí una carta."], language:"Spanish"},			
	{question:"We wrote a book.", answers:["Nosotros escribimos un libro.","Nosotras escribimos un libro.","Escribimos un libro."], language:"Spanish"},		
	{question:"Ellas bebieron vino.", answers:["They drank wine."], language:"English"},		
	{question:"They drank wine.", answers:["Ellas bebieron vino.","Ellos bebieron vino.","Bebieron vino."], language:"Spanish"},		
	{question:"I drank wine.", answers:["Yo bebí vino.","Bebí vino."], language:"Spanish"},		
	{question:"Yo bebí vino.", answers:["I drank wine."], language:"English"},			
	{question:"Tú leíste el libro.", answers:["You read the book."], language:"English"},	
	{question:"You read the book. (past tense)", answers:["Tú leíste el libro.","Leíste el libro.","Usted leyó el libro.","Ustedes leyeron el libro."], language:"Spanish"},	
	{question:"Las niñas escribieron.", answers:["The girls wrote.","The children wrote."], language:"English"},	
	{question:"The girls wrote.", answers:["Las niñas escribieron."], language:"Spanish"},	
	{question:"Ella era una persona.", answers:["She was a person."], language:"English"},	
	{question:"She was a person.", answers:["Ella era una persona.","Era una persona."], language:"Spanish"},	
	{question:"Yo leí.", answers:["I read."], language:"English"},	
	{question:"I read. (past tense)", answers:["Yo leí.","Leí."], language:"English"},
	{question:"El niño leyó.", answers:["The boy read.","The child read."], language:"English"},	
	{question:"The boy read.", answers:["El niño leyó."], language:"English"},	
	{question:"Él era una persona.", answers:["He was a person."], language:"English"},	
	{question:"He was a person.", answers:["Él era una persona.","Era una persona."], language:"Spanish"},	
	{question:"Nosotros leímos un diario.", answers:["We read a newspaper."], language:"English"},	
	{question:"We read a newspaper. (past tense)", answers:["Nosotros leímos un diario.","Nosotras leímos un diario.","Leímos un diario."], language:"Spanish"},	
	{question:"Ellas leyeron.", answers:["They read."], language:"English"},	
	{question:"They read. (past tense)", answers:["Ellas leyeron.","Ellos leyeron.","Leyeron."], language:"Spanish"},	
	{question:"Ellos leyeron un libro.", answers:["They read a book."], language:"English"},	
	{question:"They read a book. (past tense)", answers:["Ellas leyeron un libro.","Ellos leyeron un libro.","Leyeron un libro."], language:"Spanish"},		
	{question:"Nosotras comimos arroz.", answers:["We ate rice."], language:"English"},	
	{question:"Nosotros comimos arroz.", answers:["We ate rice."], language:"English"},	
	{question:"We ate rice.", answers:["Nosotras comimos arroz.","Nosotros comimos arroz.","Comimos arroz."], language:"Spanish"},	
	{question:"Yo cociné pescado.", answers:["I cooked fish."], language:"English"},	
	{question:"I cooked fish.", answers:["Yo cociné pescado.","Cociné pescado."], language:"Spanish"},	
	{question:"Ellos no comieron nada.", answers:["They did not eat anything.","They didn't eat anything."], language:"English"},	
	{question:"They did not eat anything.", answers:["Ellos no comieron nada.","Ellas no comieron nada.","No comieron nada."], language:"Spanish"},
	{question:"No cociné.", answers:["I did not cook.","I didn't cook."], language:"English"},	
	{question:"I did not cook.", answers:["Yo no cociné.","No cociné."], language:"Spanish"},		

	
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
	{question:"Seremos mujeres.", answers:["We will be women."], language:"English"},
	{question:"We will be women.", answers:["Nosotras seremos mujeres.", "Seremos mujeres."], language:"Spanish"},
	{question:"Nosotras beberemos leche.", answers:["We will drink milk."], language:"English"},
	{question:"Nosotros beberemos leche.", answers:["We will drink milk."], language:"English"},
	{question:"We will drink milk.", answers:["Beberemos leche.", "Nosotros beberemos leche.", "Nosotras beberemos leche."], language:"English"},
	{question:"Nosotras beberemos agua.", answers:["We will drink water."], language:"English"},
	{question:"Nosotros beberemos agua.", answers:["We will drink water."], language:"English"},
	{question:"We will drink water.", answers:["Beberemos agua.", "Nosotros beberemos agua.", "Nosotras beberemos agua."], language:"English"},
	{question:"You will be women.", answers:["Ustedes serán mujeres."], language:"Spanish"},	
	{question:"Ustedes serán mujeres.", answers:["You will be women."], language:"English"},
	{question:"Nosotras seremos mujeres.", answers:["We will be women."], language:"English"},	
	{question:"We will be women.", answers:["Nosotras seremos mujeres.","Seremos mujeres."], language:"Spanish"},	
	{question:"Ellas serán mujeres.", answers:["They will be women."], language:"Spanish"},	
	{question:"They will be women.", answers:["Ellas serán mujeres.","Serán mujeres."], language:"Spanish"},	
	{question:"You will drink water.", answers:["Tú beberás agua.", "Beberás agua.", "Usted beberá agua.", "Ustedes beberán agua."], language:"Spanish"},
	{question:"Ustedes beberán agua.", answers:["You will drink water."], language:"Spanish"},
	{question:"Ellos serán hombres.", answers:["They will be men."], language:"English"},	
	{question:"They will be men.", answers:["Ellos serán hombres.", "Serán hombres."], language:"English"},	
	{question:"You will drink milk.", answers:["Tú beberás leche.","Beberás leche.","Usted beberá leche.","Ustedes beberán leche."], language:"Spanish"},
	{question:"Nosotros seremos hombres.", answers:["We will be men."], language:"English"},	
	{question:"We will be men.", answers:["Nosotros seremos hombres.","Seremos hombres."], language:"Spanish"},	
	{question:"They will drink.", answers:["Beberán.","Ellos beberán.","Ellas beberán."], language:"Spanish"},	
	{question:"Ellos beberán.", answers:["They will drink."], language:"English"},	
	{question:"Las niñas beberán agua.", answers:["The girls will drink water.","The children will drink water."], language:"English"},	
	{question:"The girls will drink water.", answers:["Las niñas beberán agua."], language:"Spanish"},	
	{question:"Los niños beberán agua.", answers:["The boys will drink water.","The children will drink water."], language:"English"},	
	{question:"The boys will drink water.", answers:["Los niños beberán agua."], language:"Spanish"},		
	{question:"Tú escribirás un libro.", answers:["You will write a book."], language:"English"},	
	{question:"You will write a book.", answers:["Tú escribirás un libro.","Escribirás un libro.","Usted escribirá un libro.","Ustedes escribirán un libro."], language:"Spanish"},	
	{question:"Usted escribirá un libro.", answers:["You will write a book."], language:"English"},
	{question:"Yo escribiré una carta.", answers:["I will write a letter."], language:"English"},		
	{question:"I will write a letter.", answers:["Yo escribiré una carta.","Escribiré una carta."], language:"Spanish"},		
	{question:"Nosotros escribiremos un libro.", answers:["We will write a book."], language:"English"},		
	{question:"We will write a book.", answers:["Nosotros escribiremos un libro.","Nosotras escribiremos un libro.","Escribiremos un libro."], language:"Spanish"},		
	{question:"Ellas beberán vino.", answers:["They will drink wine."], language:"English"},		
	{question:"They will drink wine.", answers:["Ellas beberán vino.","Ellos beberán vino.","Beberán vino."], language:"Spanish"},		
	{question:"I will drink wine.", answers:["Yo beberé vino.","Beberé vino."], language:"Spanish"},		
	{question:"Yo beberé vino.", answers:["I will drink wine."], language:"English"},
	{question:"Tú leerás el libro.", answers:["You will read the book."], language:"English"},	
	{question:"You will read the book.", answers:["Tú leerás el libro.","Leerás el libro.","Usted leerá el libro.","Ustedes leerán el libro."], language:"Spanish"},	
	{question:"Las niñas escribirán.", answers:["The girls will write.","The children will write."], language:"English"},	
	{question:"The girls will write.", answers:["Las niñas escribirán."], language:"Spanish"},	
	{question:"Ella será una persona.", answers:["She will be a person."], language:"English"},	
	{question:"She will be a person.", answers:["Ella será una persona.","Será una persona."], language:"Spanish"},	
	{question:"Yo leeré.", answers:["I will read."], language:"English"},	
	{question:"I will read.", answers:["Yo leeré.","Leeré."], language:"English"},
	{question:"El niño leerá.", answers:["The boy will read.","The child will read."], language:"English"},	
	{question:"The boy will read.", answers:["El niño leerá."], language:"English"},	
	{question:"Él será una persona.", answers:["He will be a person."], language:"English"},	
	{question:"He will be a person.", answers:["Él será una persona.","Será una persona."], language:"Spanish"},	
	{question:"Nosotros leeremos un diario.", answers:["We will read a newspaper."], language:"English"},	
	{question:"We will read a newspaper.", answers:["Nosotros leeremos un diario.","Nosotras leeremos un diario.","Leeremos un diario."], language:"Spanish"},	
	{question:"Ellas leerán.", answers:["They will read."], language:"English"},	
	{question:"They will read.", answers:["Ellas leerán.","Ellos leerán.","Leerán."], language:"Spanish"},	
	{question:"Ellos leerán un libro.", answers:["They will read a book."], language:"English"},	
	{question:"They will read a book.", answers:["Ellas leerán un libro.","Ellos leerán un libro.","Leerán un libro."], language:"Spanish"},	
	{question:"Nosotras comeremos arroz.", answers:["We will eat rice."], language:"English"},	
	{question:"Nosotros comeremos arroz.", answers:["We will eat rice."], language:"English"},	
	{question:"We will eat rice.", answers:["Nosotras comeremos arroz.","Nosotros comeremos arroz.","Comeremos arroz."], language:"Spanish"},	
	{question:"Yo cocinaré pescado.", answers:["I will cook fish."], language:"English"},	
	{question:"I will cook fish.", answers:["Yo cocinaré pescado.","Cocinaré pescado."], language:"Spanish"},	
	{question:"Ellos no comerán nada.", answers:["They will not eat anything.","They won't eat anything."], language:"English"},	
	{question:"They will not eat anything.", answers:["Ellos no comerán nada.","Ellas no comerán nada.","No comerán nada."], language:"Spanish"},
	{question:"No cocinaré.", answers:["I will not cook.","I won't cook."], language:"English"},	
	{question:"I will not cook.", answers:["Yo no cocinaré.","No cocinaré."], language:"Spanish"}		
];
