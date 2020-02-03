#Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
#For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".


path = "/usr/bin/../bin/./scripts/../"

#given the path is a string we need to sperate the path into a list of seperate strings that start with a / and end before the next /

pathlist = []

#we then need sort through the list accounting for removals ".." and additions "." to the path. For example ['/usr', '/bin', '../'] will become ['/usr,'] and ['/usr', '/bin', '/.', '/scripts'] will become ['/usr', '/bin', '/scripts']
newpathlist = []

#we then will take the sorted list and create a new string which will be the shortest path




