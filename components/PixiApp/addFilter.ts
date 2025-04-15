import {type Application, DisplacementFilter, Sprite} from 'pixi.js';

export function addFilter(app: Application)
{
  const sprite = Sprite.from('displacement');

  sprite.texture.source.addressMode = 'repeat';

  const filter = new DisplacementFilter({
    sprite,
    scale: {
      x: 200,
      y: 30,
    }
  });

  app.stage.filters = [filter];
}
