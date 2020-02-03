#Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
#For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".
import re

path = "/usr/bin/../bin/./scripts/../test/././../thereshouldbenotest"

#given the path is a string we need to sperate the path into a list of seperate strings split on the '/'


pathlist = re.sub(r'/', ' ', path).split()

#we then need sort through the list accounting for removals ".." and additions "." to the path. For example ['/usr', '/bin', '../'] will become ['/usr,'] and ['/usr', '/bin', '/.', '/scripts'] will become ['/usr', '/bin', '/scripts']
newpathlist = []
for str in pathlist:
  if str == '..':
    newpathlist.pop()
  elif str != '.':
    newpathlist.append(str)


#we then will take the sorted list and create a new string which will be the shortest path
shortestpath ='/'

for str in newpathlist:
  shortestpath += str+'/'

print(shortestpath)

#non-regex method
# substr = ''
# pathlist=[]
# for ind, elm in enumerate(path):
#   if elm == '/':
#     if substr != '':
#       pathlist.append(substr)
#       substr = ''
#   elif ind == len(path)-1:
#     substr += elm
#     pathlist.append(substr)
#   else:
#     substr += elm

# newpathlist = []
# for str in pathlist:
#   if str == '..':
#     newpathlist.pop()
#   elif str != '.':
#     newpathlist.append(str)

# shortestpath ='/'

# for str in newpathlist:
#   shortestpath += str+'/'

# print(shortestpath)