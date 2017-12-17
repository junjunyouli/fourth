import indexModel from '../models/indexModel';
const indexController ={
	index(){
		return async (ctx,next) => {
			ctx.body = await  ctx.render('index.html');
		}
	},
	update(){
		return async (ctx,next) => {
			const  tap = new indexModel(ctx);
			ctx.body= await tap.updateNum();
		}
	},
	star(){
		return async (ctx,next)=>{
			if(ctx.request.header['x-pjax']){
				ctx.body="<x-star></x-star>";
			}else{
				ctx.body = await ctx.render('star.html');
			}
		}
	},
	hands(){
		return async (ctx,next) =>{
			if(ctx.request.header['x-pjax']){
				ctx.body="<x-praise></x-praise>";
			}else{
				ctx.body = await ctx.render('index.html');
			}
		}
	},
	getAdv(){
		return async (ctx,next)=>{
			ctx.body = await "<div>this is Advertisement</div>"
		}
	}
}

export default indexController;