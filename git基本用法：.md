## git基本用法：

1，开始输入你的名字和email

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

你的名字和Email地址，注意`git config`命令的`--global`参数。

2，建立一个空的文件夹

```
$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit
pwd`命令用于显示当前目录。在我的Mac上，这个仓库位于`/Users/michael/learngit
```

3，git init 查看这个文件的状态，git是隐藏的（他会告诉你是空的）

通过`git init`命令把这个目录变成Git可以管理的仓库：

```
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
```

4，git add +文件的名字和类型：将文件提交到仓库（没有消息提示）

```
$ git add readme.txt
```

5，git commit将文件提交给仓库

```
$ git commit -m "wrote a readme file"
[master (root-commit) eaadf4e] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
```

-m是为了解释说明文件。

`git add <file>`可反复多次使用，添加多个文件；`git commit -m <message>`是整体。

6，git status查看现在仓库的状态，可以知道自己前一次修改的内容。要随时掌握工作区的状态，使用`git status`命令

7，git diff可以对比前一次和现在的内容有什么不同。如果`git status`告诉你有文件被修改过，用`git diff`可以查看修改内容

8，`git log`可以查看你的历史操作和前段时间对这个文件做了什么，有显示时间和内容

（穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本）

9，HEAD：在Git中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。

10，git reset从现在这个状态退回上一个状态。

```
$ git reset --hard HEAD^
HEAD is now at e475afc add distributed
```

11，git reflog查看命令历史，以便确定要回到未来的哪个版本(重返未来)

12,一层一层的提交，先add后commit

13，每次修改，如果不用`git add`到暂存区，那就不会加入到`commit`中。

14，git checkout -- file修改你的错误

```
$ git checkout -- readme.txt
```

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考[版本回退](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)一节，不过前提是没有推送到远程库。

15，git rm去删除你想要删除的东西，然后在git commit到库中就可以删除了。

16，git push将文件送入远程仓库。

1）关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；

2）关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改

17，克隆远程仓库的东西

仓库的地址，然后使用`git clone`命令克隆。

Git支持多种协议，包括`https`，但`ssh`协议速度最快。