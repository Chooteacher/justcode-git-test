# git 명령어

## 1. git add -A

- git add : 작업 디렉토리상의 변경 내용을 스테이징 영역에 추가
- -A : 모든 수정파일들을 추가

<br>

## 2. git commit -m " "

- git commit : 스테이징 영역에 있는것을 로컬 레지스토리에 저장 후 하나의 버전으로 등록
- -m : vim에서 별도의 메세지를 작성할 필요 없이 인라인 형식으로 바로 커밋 메세지 작성 가능
- "~~" : 커밋 메세지

<br>

## 3. git push -u origin main

- git push : 원격저장소로 파일 업로드
- -u origin main : origin(저장소 이름) main(브랜치 이름) 해당 저장소, 해당 브랜치에 자동으로 push 할 수 있게 해줌

- 한번 하면 git push 만으로 파일 업로드 가능!

<br>

## 4. git branch

- 독립적으로 개발할 수 있게해줌
- 기존에 저장한 파일을 master 브랜치에 유지하면서 독립적으로 기존 파일 내용을 수정하거나 새로운 파일을 추가하고 스테이징, 커밋 할 수 있음

- git branch : 현재 저장소의 브랜치 확인

- git branch [branchName] : 'branchName' 이란 새 브랜치를 만듦

- git checkout [branchName] : 'branchName' 브랜치로 이동

- git merge [branchName] : 현재 브랜치로 'branchName' 브랜치를 가져와 병합

- git branch -d [branchName] : 'branchName' 브랜치 삭제
