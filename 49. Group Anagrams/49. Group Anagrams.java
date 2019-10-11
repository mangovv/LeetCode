/*'abc','cab''cba'--key 'abc' 
key also can num code  */

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        
        for(String str : strs){
            char[] charArr = str.toCharArray();
            Arrays.sort(charArr);
            String key = String.valueOf(charArr);
            
            if(map.containsKey(key)){
                map.get(key).add(str);
            }else{
                List<String> valueList = new ArrayList<>();
                valueList.add(str);
                map.put(key,valueList);
            }       
        }
        return new ArrayList<>(map.values());
    }
}