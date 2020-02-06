# There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with 
# the kth person, and removing every successive kth person going clockwise until there is no one left.

# Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

# For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.




#We need to loop through a list and remove every Kth person and repeat until there is only one person in the list, this will be the last surviving person

#first we need variable for the number of prisoners, a variable for the Kth person, and a counter to track the number of prisoners account for till one is killed
N = 5
Kth = 2
count = 0

#we need to create a list of the prisoners starting with 1
prisoners = list(range(1, N+1))

#we need to create a while loop that will run until the length of the list is 1

while len(prisoners) != 1 :
  #we need an new list to account for surviving prisoners
  surviving = []
  #we need to loop through the list 
  for el in prisoners : 
    #increase the count
    count += 1
    #if the count does not equal Kth add them to the list of survivors, is it does reset count
    if count != Kth :
      surviving.append(el)
    else: 
      count = 0
  #reset the list of prisoners to the list of survivors
  prisoners = surviving

print(prisoners)

