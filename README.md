# About
ジオメトリインスタンシングで量産したboxを頂点シェーダーでアニメションさせています。
また、平面に移行した際に、並べたすべてのインスタンスで１枚のテクスチャを表示するアプローチとして、プロジェクションマッピングを行っています。

【苦労した点】
プロジェクションマッピングの投影カメラの位置と投影範囲の制御について、DOMから得た位置情報とピッタリに合わせるのに悩みました。

I create geometry instancing animation and it uses projection mapping texture.

I challenged to control projection camera position and range that obtained from information from DOM contents.

[vertex shader](https://note.com/unshift/n/ndac4b1dd155c)
[projection mapping](https://wgld.org/d/webgl/w049.html) .

https://projection-mapping-nu.vercel.app/

![image](https://github.com/yukaorange/projection-mapping/assets/98954503/fea77a59-4dc4-46df-a1a2-ebe3183355ce)

# References

- [projection mapping](https://wgld.org/d/webgl/w049.html)
- [geometry instancing](https://note.com/unshift/n/ndac4b1dd155c)
