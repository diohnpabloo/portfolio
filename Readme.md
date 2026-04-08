✅ 2. Redimensione no tamanho ideal
Recomendações para seu uso atual (cards e modal):

Uso	Largura recomendada	Altura sugerida	Formato
No card (h-40~h-64)	800px	~400–600px	.jpg
No modal (zoom)	>1200px	proporcional	.png ou .webp


className={`
                            font-bold uppercase text-[10px] relative tracking-widest transition-all duration-300
                        ${active === item.id ? 'text-primary after:scale-x-100' : 'text-gray-400 hover:text-primary after:scale-x-0 hover:after:scale-x-100'}
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:origin-left after:transition-transform after:duration-300
  `}