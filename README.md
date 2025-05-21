## Quick start

Several quick start are available:

- [Download the latest release](https://github.com/twbs/bootstrap/archive/v5.3.6.zip)
- Clone the repo: `git clone https://github.com/twbs/bootstrap.git`
- Install with [npm](https://www.npmjs.com/): `npm install bootstrap@v5.3.6`
- Install with [yarn](https://yarnpkg.com/): `yarn add bootstrap@v5.3.6`
- Install with [Bun](https://bun.sh/): `bun add bootstrap@v5.3.6`
- Install with [Composer](https://getcomposer.org/): `composer require twbs/bootstrap:5.3.6`
- Install with [NuGet](https://www.nuget.org/): CSS: `Install-Package bootstrap` Sass: `Install-Package bootstrap.sass`

| 過濾方法                | 適用情境            | 優點           | 缺點           |
| ------------------- | --------------- | ------------ | ------------ |
| **Kalman Filter**   | 即時追蹤、車輛導航、低速運動  | 平滑、可即時應用     | 實作稍複雜        |
| **Moving Average**  | 簡單平滑、後處理        | 易於實作、效果穩定    | 延遲高，不適合即時處理  |
| **One Euro Filter** | 手機感測器數據、VR、遊戲輸入 | 對速度變化反應快、抑抖動 | 需要調整參數       |
| **Particle Filter** | 高精度導航、SLAM 等    | 適合複雜模型、非線性估計 | 計算成本高，較難實作   |
| **Savitzky–Golay**  | 路徑平滑視覺化（非即時）    | 保留波形趨勢       | 無法即時處理，資料需求大 |
