# next-storybook
Next.jsでstorybookを作成する
storybookの環境設定はtsukasaさんから提供頂きました！
[tsukasaさん マイページ](https://github.com/tatsuHigh)

## ローカルでの起動手順
以下をclone  
```https://github.com/cti1650/storybook.git```  

cloneしたフォルダで以下のコマンドを実行  
```npm install```  

続けて以下のコマンドを実行  
```npm run storybook```  

ブラウザで以下のURLにアクセス  
```http://localhost:6006/```  

## 開発手順
### 作成物について
作るものはProjectsにIssueを立ててください。  

### ブランチについて
branchはmasterからfeatureを切って作業してください。  
featureブランチの名前は基本```feature/Issue番号```でお願いします。  
作業が終わったらmasterにpull requestを出してください。  
はじめのうちは私がレビューしてマージしますが、経験者の方がいればレビューお手伝いお願いします。  

### 作業フォルダについて
コンポーネントごとに以下のフォルダ内にフォルダを切ってください。  
```stories/components```  
例）stories/components/button
