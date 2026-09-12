const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Behaviors.Fade,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Behaviors.EightDir,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Bullet: 0},
	{Ball: 0},
	{Fade: 0},
	{Brick: 0},
	{Wall: 0},
	{gameovereasylevel: 0},
	{YouWin: 0},
	{Lose: 0},
	{Text: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{"8Direction": 0},
	{Paddle1: 0},
	{BricksCounter: 0},
	{TiledBackground4: 0},
	{hardlevel: 0},
	{gameoverhardlevel: 0},
	{TiledBackground: 0}
];

self.InstanceType = {
	Ball: class extends self.ISpriteInstance {},
	Brick: class extends self.ISpriteInstance {},
	Wall: class extends self.ISpriteInstance {},
	gameovereasylevel: class extends self.IButtonInstance {},
	YouWin: class extends self.ITextInstance {},
	Lose: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Paddle1: class extends self.ISpriteInstance {},
	BricksCounter: class extends self.ITextInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	hardlevel: class extends self.IButtonInstance {},
	gameoverhardlevel: class extends self.IButtonInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {}
}